export interface CacheInterface {
    accesses: number
    args: {
        parts: string | null
        url: string
    }
    creation_date: string
    expires: null | string
    extra: null | string
    flags: number
    last_access: string
    owner: string
    owner_data: {
        'accept-ranges': string
        connection: string
        'content-encoding': string
        'content-type': string
        date: string
        'keep-alive': string
        'last-modified': string
        server: string
        'strict-transport-security': string
        vary: string
        'x-frame-options': string
    }
    parent: null | string
    path: string
    replaced: null | string
    size: number
    type: string
    // 'isChecked' is an optional custom field used for
    // the selecting the cache files.
    // It is optional because the server response would
    // not have this field. This field is added as a
    // state in the frontend only.
    isChecked?: boolean
}

// for fetching all cache
export interface CacheResponseInterface {
    data: CacheInterface[]
}
