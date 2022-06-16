import tw from 'twin.macro'
import 'styled-components/macro'

import {
    Layout,
    Container,
    ContainerHeader,
    ContainerBody,
    InputColumn,
} from './../components/Layout'

import { TextInput, SelectInput } from './../components/Inputs'
import { HeaderTitle } from './../components/Text'

const Cache = () => {
    return (
        <Layout>
            <Container>
                <ContainerHeader>
                    <HeaderTitle>Cache</HeaderTitle>
                    <div tw="flex flex-col w-full space-y-4 md:(flex-row flex-shrink space-y-0 space-x-12)">
                        <InputColumn>
                            <TextInput
                                inputName="filename"
                                inputLabel="Filename"
                            />
                            <TextInput inputName="owner" inputLabel="Owner" />
                        </InputColumn>
                        <InputColumn>
                            <SelectInput
                                inputName="dataType"
                                inputLabel="Data Type"
                                inputOptions={[
                                    { name: 'grib', label: 'GRIB' },
                                    { name: 'netcdf', label: 'NetCDF' },
                                ]}
                            />
                            <TextInput inputName="owner" inputLabel="Owner" />
                        </InputColumn>
                        <InputColumn>
                            <TextInput inputName="owner" inputLabel="Owner" />
                            <TextInput inputName="owner" inputLabel="Owner" />
                        </InputColumn>
                    </div>
                    <div tw="self-center md:(self-start text-end)">
                        <button tw="px-2 py-1 rounded-lg text-base text-gray-100 bg-blue-700 md:text-lg">
                            filter
                        </button>
                    </div>
                </ContainerHeader>
                <ContainerBody>body</ContainerBody>
            </Container>
        </Layout>
    )
}

export default Cache
