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
