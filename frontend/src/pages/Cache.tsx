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

const Cache = () => {
    const [data, setData] = useState<[] | null>(null)

    useEffect(() => {
        fetch('/api/v1/cache/all')
            .then((res) => res.json())
            .then((res) => {
                setData(res.data)
            })
    }, [])

    data && data.map((obj) => console.log(obj['creation_date']))
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
                            <TextInput inputName="owner" inputLabel="Owner" />
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
                    <CacheTable />
                </ContainerBody>
            </Container>
        </Layout>
    )
}

export default Cache
