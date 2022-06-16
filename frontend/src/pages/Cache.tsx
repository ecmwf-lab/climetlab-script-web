import 'twin.macro'
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
import { SubmitButton } from './../components/Button'

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
                        <SubmitButton>filter</SubmitButton>
                    </div>
                </ContainerHeader>
                <ContainerBody>body</ContainerBody>
            </Container>
        </Layout>
    )
}

export default Cache
