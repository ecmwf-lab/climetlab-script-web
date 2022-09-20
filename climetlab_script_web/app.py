from ast import literal_eval

import climetlab as cml
from climetlab.core.caching import (
    cache_directory,
    decache_file,
    dump_cache_database,
    purge_cache,
    summary_dump_cache_database,
)
from climetlab.scripts.cache import CacheCmd, Matcher
from flask import Flask, request
from flask.helpers import send_from_directory
from waitress import serve

app = Flask(__name__, static_folder="build", static_url_path="/")


@app.route("/")
def index():
    if app.static_folder:
        return send_from_directory(app.static_folder, "index.html")
    else:
        raise ValueError(
            "app.static_folder does not exist. Please check the file path."
        )


@app.route("/api/cache/capabilities")
def cache_capabilities():
    res = CacheCmd().do_cache._kwargs_specifications

    # remove some parameters that we don't want to show in the api
    for k in ["json", "all", "path"]:
        if k in res:
            del res[k]

    # Flask cannot serialize type = str
    for k, v in res.items():
        if v.get("type", None) == str:
            v["type"] = "str"
        if v.get("action", None) == "store_true":
            del v["action"]
            v["type"] = "boolean"

    return {
        "directory": cache_directory(),
        "capabilities": res,
    }


# request.args = {
#     "larger": "100",
#     "smaller": "700",
#     "newer": "1d",  # different datetime options
#     "older": "1d",
#     "match": "any_text",
# }


@app.route("/api/cache", methods=["GET", "DELETE"])
def cache():
    is_request_empty = True
    request_dict = dict(request.args)

    # if atleast a single value is not empty in
    # this dictionary, then is_request_empty=False
    for val in request_dict.values():
        if val != "":
            is_request_empty = False

    # now that the dictionary has atleast 1 value,
    # we remove the remaining empty key-value pairs,
    # because that's how the CliMetLab API works.
    keys_to_delete = [key for key, val in request_dict.items() if val == ""]
    for key in keys_to_delete:
        del request_dict[key]

    # if request from the frontend is empy,
    # then return all the cache entries. Else,
    # return those requested.
    if is_request_empty:
        return {"data": dump_cache_database()}
    else:
        matcher = Matcher(request_dict)
        if request.method == "GET":
            return {"data": dump_cache_database(matcher=matcher)}
        if request.method == "DELETE":
            purge_cache(matcher=matcher)
            return {"ok": "ok"}  # TODO
        raise NotImplementedError()


@app.route("/api/cache/delete", methods=["DELETE"])
def cache_delete():
    # decode request string
    files_to_delete = request.data.decode("UTF-8")
    # convert a string representation of list to list datatype.
    files_to_delete = literal_eval(files_to_delete)
    # delete files via Climetlab.
    for f in files_to_delete:
        print(f"Deleting file : {f}\n")
        decache_file(f)
    return {"data": "Files deleted."}


@app.route("/api/cache/meta", methods=["GET"])
def cache_meta():
    matcher = Matcher(dict(request.args))
    count, size = summary_dump_cache_database(matcher=matcher)
    message = None
    if not matcher.undefined:
        message = matcher.message
    return {
        "count": str(count),
        "size": str(size),
        "message": message,
    }


@app.route("/api/settings", methods=["GET", "POST", "DELETE"])
def settings():
    if request.method == "GET":
        res = cml.settings.dump()
        res = list(res)
        res = [{r[0]: str(r[1])} for r in res]
        return {"data": res}


def run_server():
    print("Starting CliMetLab server.")
    print("Running on http://127.0.0.1:8080 (Press CTRL+C to quit)")
    serve(app, host="127.0.0.1", port=8080)


if __name__ == "__main__":
    run_server()
