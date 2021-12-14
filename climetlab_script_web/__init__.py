# (C) Copyright 2020 ECMWF.
#
# This software is licensed under the terms of the Apache Licence Version 2.0
# which can be obtained at http://www.apache.org/licenses/LICENSE-2.0.
# In applying this licence, ECMWF does not waive the privileges and immunities
# granted to it by virtue of its status as an intergovernmental organisation
# nor does it submit to any jurisdiction.
#

import web
from climetlab.core.caching import dump_cache_database
from climetlab.scripts.tools import parse_args
from web.contrib.template import render_jinja

render = render_jinja(
    "templates",  # Set template directory.
    encoding="utf-8",  # Encoding.
)


def html_wrap(txt):
    return f"""
<!doctype html>
<html>
    <head>
     <link rel="icon" type="image/png" href="/static/favicon.ico">
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    <body>
     <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
     {txt}
    </body>
<html>
"""  # noqa: E501


class index:
    def GET(self, name):
        return html_wrap(
            """Climetlab web:
                <a href="./cache">Cache</a>,
                <a href="https://climetlab.readthedocs.io">Documentation</a>
        """
        )


class cache:
    def GET(self):
        cache = dump_cache_database()
        return html_wrap(render.cache(dict(cache=cache)))


class cacheentry:
    def GET(self, name):
        cache = dump_cache_database()
        print(name)
        for e in cache:
            if e["path"] == name:
                return html_wrap(render.cacheentry(dict(entry=e)))


urls = (
    "/static/(.*)",
    "static",
    "/cache",
    "cache",
    "/cache/entry/(.*)",
    "cacheentry",
    "/(.*)",
    "index",
)


class WebCmd:
    @parse_args(
        start=dict(
            action="store_true",
            help="Start web server.",
        ),
    )
    def do_web(self, args):
        """ Web server to manage climetlab."""
        print("ok, starting web server")
        app = web.application(urls, globals())
        web.httpserver.runsimple(app.wsgifunc(), ("127.0.0.1", 51979))
