import axios from 'axios'
import 'twin.macro'
import 'styled-components/macro'
import { useState } from 'react'

import {
    Layout,
    Container,
    ContainerHeader,
    ContainerBody,
    InputColumn,
} from './../components/Layout'

import { TextInput, SelectInput } from './../components/Inputs'

import { CacheTable } from './../components/Tables'
import { HeaderTitle } from './../components/Text'
import { SubmitButton } from './../components/Buttons'

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
}

// for fetching all cache below
// interface CacheResponseInterface {
//     data: CacheInterface[]
// }

const Cache = () => {
    // input form data states
    const [formInputSearch, setFormInputSearch] = useState<string>('')
    const [formInputFileSize, setFormInputFileSize] = useState<string>('')
    // const [formInputFileType, setFormInputFileType] = useState<string>('')
    const [formInputDate, setFormInputDate] = useState<string>('')

    // cache response state
    const [cacheData, setCacheData] = useState<CacheInterface[]>([])

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        axios
            .get('/api/cache', { params: { match: formInputSearch } })
            .then((res) => setCacheData(res.data.data))
    }

    // display all cache on first page load
    // useEffect(() => {
    //     axios
    //         .get<CacheResponseInterface>('/api/cache')
    //         .then((res) => setCacheData(res.data.data))
    // }, [])

    return (
        <Layout>
            <Container>
                <ContainerHeader>
                    <HeaderTitle>Cache</HeaderTitle>
                    <form
                        onSubmit={handleSubmit}
                        tw="flex flex-col space-y-4 h-full w-full md:(flex-row justify-between)"
                    >
                        <div tw="grid grid-cols-1 gap-4 md:(grid-cols-3 gap-12) lg:gap-16">
                            <InputColumn>
                                <TextInput
                                    inputName="search"
                                    inputLabel="Search"
                                    value={formInputSearch}
                                    setState={setFormInputSearch}
                                />
                                <SelectInput
                                    inputName="fileType"
                                    inputLabel="File Type"
                                    inputOptions={[
                                        { name: 'grib', label: 'GRIB' },
                                        { name: 'netcdf', label: 'NetCDF' },
                                    ]}
                                />
                            </InputColumn>
                            <InputColumn>
                                <TextInput
                                    inputName="fileSize"
                                    inputLabel="File Size"
                                    value={formInputFileSize}
                                    setState={setFormInputFileSize}
                                />
                                <TextInput
                                    inputName="date"
                                    inputLabel="Date"
                                    value={formInputDate}
                                    setState={setFormInputDate}
                                />
                            </InputColumn>
                        </div>
                        <div tw="self-center md:(self-start text-end pl-16)">
                            <SubmitButton>apply</SubmitButton>
                        </div>
                    </form>
                </ContainerHeader>
                {/* Container body with table */}
                <ContainerBody>
                    <CacheTable cacheData={cacheData} />
                </ContainerBody>
            </Container>
        </Layout>
    )
}

export default Cache
