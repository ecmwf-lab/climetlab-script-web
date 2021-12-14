# (C) Copyright 2020 ECMWF.
#
# This software is licensed under the terms of the Apache Licence Version 2.0
# which can be obtained at http://www.apache.org/licenses/LICENSE-2.0.
# In applying this licence, ECMWF does not waive the privileges and immunities
# granted to it by virtue of its status as an intergovernmental organisation
# nor does it submit to any jurisdiction.
#

import web
from climetlab.scripts.tools import parse_args


class index:
    def GET(self, name):
        if not name:
            name = "World"
        return "Hello, " + name + "!"


urls = ("/(.*)", "index")


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
