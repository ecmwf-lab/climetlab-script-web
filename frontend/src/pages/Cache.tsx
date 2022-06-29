import 'twin.macro'
import 'styled-components/macro'
import { useState, useEffect } from 'react'

import {
    Layout,
    Container,
    ContainerHeader,
    ContainerBody,
    InputColumn,
} from './../components/Layout'

import {
    TextInput,
    SelectInput,
    MultiRangeSlider,
} from './../components/Inputs'

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

const Cache = () => {
    const [cacheData, setCacheData] = useState<CacheInterface[]>([])

    useEffect(() => {
        fetch('/api/cache')
            .then((res) => res.json())
            .then((res) => {
                setCacheData(res.entries)
            })
    }, [])

    // data && data.map((obj) => console.log(obj['creation_date']))
    return (
        <Layout>
            <Container>
                <ContainerHeader>
                    <HeaderTitle>Cache</HeaderTitle>
                    <div tw="grid grid-cols-1 gap-4 md:(grid-cols-3 gap-12) lg:gap-16">
                        <InputColumn>
                            <TextInput
                                inputName="filename"
                                inputLabel="Filename"
                            />
                            <TextInput inputName="owner" inputLabel="Owner" />
                        </InputColumn>
                        <InputColumn>
                            <SelectInput
                                inputName="fileType"
                                inputLabel="File Type"
                                inputOptions={[
                                    { name: 'grib', label: 'GRIB' },
                                    { name: 'netcdf', label: 'NetCDF' },
                                ]}
                            />
                            <TextInput inputName="date" inputLabel="Date" />
                        </InputColumn>
                        <InputColumn>
                            <MultiRangeSlider
                                inputName="fileSize"
                                inputLabel="File Size"
                                displayMin={0}
                                displayMax={1000}
                                initMinVal={100}
                                initMaxVal={800}
                                step={100}
                            />
                        </InputColumn>
                    </div>
                    <div tw="self-center md:(self-start text-end pl-16)">
                        <SubmitButton>apply</SubmitButton>
                    </div>
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
