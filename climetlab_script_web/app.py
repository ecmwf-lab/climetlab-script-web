# import json

import climetlab as cml
from climetlab.core.caching import (
    cache_directory,
    dump_cache_database,
    purge_cache,
    summary_dump_cache_database,
)
from climetlab.scripts.cache import CacheCmd, Matcher
from flask import Flask, request
from flask.helpers import send_from_directory
from waitress import serve

# import subprocess


app = Flask(__name__, static_folder="build", static_url_path="/")


@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")


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


# /api/cache?file-name=""
# /api/cache?owner=""
# /api/cache?file-type=""
# /api/cache?min-date-accessed=""&max-date-accessed=""
# /api/cache/min-file-size=""&max-file-size=""


# f = Matcher({"owner": "owner_name_1", "file-name": "file_name_1"})
# request.args = {
#     "larger": "100",
#     "smaller": "700",
#     "newer": "1d",  # different datetime options
#     "older": "1d",
#     "match": "any_text",
# }


@app.route("/api/cache", methods=["GET", "DELETE"])
def cache():
    print(dict(request.args))
    matcher = Matcher(dict(request.args))
    if request.method == "GET":
        return {"data": dump_cache_database(matcher=matcher)}
    if request.method == "DELETE":
        purge_cache(matcher=matcher)
        return {"ok": "ok"}  # TODO
    raise NotImplementedError()


@app.route("/api/cache/meta", methods=["GET"])
def cache_meta():
    matcher = Matcher(dict(request.args))
    count, size = summary_dump_cache_database(matcher=matcher)
    message = None
    if not matcher.undefined:
        message = matcher.message
    return {
        "count": count,
        "size": size,
        "message": message,
    }


@app.route("/api/settings", methods=["GET", "POST", "DELETE"])
def settings():
    if request.method == "GET":
        res = cml.settings.dump()
        res = list(res)
        for k in res:
            print(k)
        return {"settings": res}


def run_server():
    print("Starting CliMetLab server.")
    print("Running on http://127.0.0.1:8080 (Press CTRL+C to quit)")
    serve(app, host="127.0.0.1", port=8080)


if __name__ == "__main__":
    run_server()
