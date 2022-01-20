# (C) Copyright 2020 ECMWF.
#
# This software is licensed under the terms of the Apache Licence Version 2.0
# which can be obtained at http://www.apache.org/licenses/LICENSE-2.0.
# In applying this licence, ECMWF does not waive the privileges and immunities
# granted to it by virtue of its status as an intergovernmental organisation
# nor does it submit to any jurisdiction.
#

import os

import web
from climetlab.scripts.tools import parse_args

from .api import cache, cacheentry


class frontend:
    def GET(self, name):
        raise web.seeother(f"/static/{name}")


urls = (
    "/api/cache",
    cache,
    "/api/cacheentry",
    cacheentry,
    "/(.*)",
    frontend,
)


class WebCmd:
    @parse_args(
        start=dict(
            action="store_true",
            help="Start web server.",
        ),
    )
    def do_web(self, args):
        """Web server to manage CliMetLab."""
        print("Starting CliMetLab web server")

        cwd = os.getcwd()
        here = os.path.realpath(os.path.dirname(__file__))
        # need to go to the directory where the folder static/ is located
        # to ensure that web.py finds it.
        os.chdir(here)

        app = web.application(urls, globals())
        web.httpserver.runsimple(app.wsgifunc(), ("127.0.0.1", 51979))

        os.chdir(cwd)
        print("CliMetLab web server stopped.")
