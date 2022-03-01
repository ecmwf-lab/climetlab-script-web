#!/usr/bin/env python
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


def parse_query_as_dict(query):
    if not query.startswith("?"):
        return {}
    query = query[1:]
    query = query.split("&")
    for param in query:
        assert "=" in param
    query = [param.split("=") for param in query]
    query = {param[0]: param[1] for param in query}
    return query


class cache:
    def GET(self):
        cache = dump_cache_database()
        return dict(cache=cache)


class cacheentry:
    def GET(self):
        # see https://webpy.org/cookbook/ctx
        query = web.ctx.query

        query = parse_query_as_dict(query)

        assert "path" in query, query

        cache = dump_cache_database()
        for e in cache:
            if e["path"] == query["path"]:
                return dict(entry=e)
