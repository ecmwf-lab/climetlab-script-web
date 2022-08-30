export interface SettingsInterface {
    'cache-directory': string
    'check-out-of-date-urls': boolean
    'datasets-catalogs-urls': []
    'datasets-directories': []
    'download-out-of-date-urls': boolean
    'graph-plotting-backend': string
    'layers-directories': []
    'map-plotting-backend': string
    'maximum-cache-disk-usage': string
    'maximum-cache-size': null | string
    'number-of-download-threads': number
    'plotting-options': []
    'projections-directories': []
    'styles-directories': []
    'url-download-timeout': string
    'use-standalone-mars-client-when-available': boolean
    version: string
}

// for fetching all settings
export interface SettingsResponseInterface {
    data: SettingsInterface[]
}
