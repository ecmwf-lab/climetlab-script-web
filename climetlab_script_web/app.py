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

# Inside core/caching _dump_cache_database

# filter_params = {
#     "file-name": "",
#     "owner": "",
#     "file-type": "",
#     "min-date-accessed": "",
#     "max-date-accessed": "",
#     "min-file-size": "",
#     "max-file-size": "",
# }

# for f in filter_params:
#     if f is not None:
#         with self.connection as db:
#             query_result = db.execute("SELECT * FROM cache")
#             for row in query_result:
#                 row = dict(row)
#
#                 for key in ("args", "owner_data"):
#                     if row[key] is not None:
#                         row[key] = json.loads(row[key])
#
#
#


# def _dump_cache_database(self, filter_params: dict):
#     result = []
#     with self.connection as db:
#         for d in db.execute("SELECT * FROM cache"):
#             n = dict(d)
#             for k in ("args", "owner_data"):
#                 if n[k] is not None:
#                     n[k] = json.loads(n[k])
#             if matcher(n):
#                 result.append(n)
#     return result


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
    matcher = Matcher(dict(request.args))
    if request.method == "GET":
        return {"entries": dump_cache_database(matcher=matcher)}
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
