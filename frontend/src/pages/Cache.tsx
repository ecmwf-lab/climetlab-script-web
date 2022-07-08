import 'twin.macro'
import 'styled-components/macro'

import axios from 'axios'
import { useState } from 'react'
import useClickOutside from './../hooks/useClickOutside'

import {
    Layout,
    Container,
    ContainerHeader,
    ContainerBody,
    InputColumn,
} from './../components/LayoutContainers'
import { HeaderTitle } from './../components/Text'
import { CacheTable } from './../components/Tables'
import { SubmitButton } from './../components/Buttons'
import { FileSizePicker } from './../components/Dropdowns'
import { TextInput, SelectInput } from './../components/Inputs'

import { CacheInterface } from './../interfaces/cache'

const Cache = () => {
    // form input
    const [formInputSearch, setFormInputSearch] = useState<string>('')
    const [formInputMinFileSize, setFormInputMinFileSize] = useState<string>('')
    const [formInputMaxFileSize, setFormInputMaxFileSize] = useState<string>('')

    // dropwdown open/close
    const [isFormInputFileSizeOpen, setIsFormInputFileSizeOpen] =
        useState<boolean>(false)

    // cache response
    const [cacheData, setCacheData] = useState<CacheInterface[]>([])

    // close input menu by click outside
    const formFileSizePickerRef = useClickOutside(() =>
        setIsFormInputFileSizeOpen(false)
    )

    // TODO: CONVERT THE FORM INPUT STATE INTO AN OBJECT
    // submit form to search cache based on provided input
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
                        tw="flex flex-col w-full space-y-4 h-full w-full md:(flex-row justify-between)"
                    >
                        <div tw="grid w-full grid-cols-1 gap-4 md:(grid-cols-3 gap-12) lg:gap-16">
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
                                <div tw="relative flex flex-row w-full justify-between md:(space-y-0 space-x-4)">
                                    <div tw="w-2/5">
                                        <TextInput
                                            inputName="minFileSize"
                                            inputLabel="Min File Size"
                                            value={formInputMinFileSize}
                                            setState={setFormInputMinFileSize}
                                            isFormOpen={isFormInputFileSizeOpen}
                                            setIsFormOpen={
                                                setIsFormInputFileSizeOpen
                                            }
                                        />
                                        {isFormInputFileSizeOpen && (
                                            <FileSizePicker
                                                testProp="lmao"
                                                ref={formFileSizePickerRef}
                                            />
                                        )}
                                    </div>
                                    <div tw="w-2/5">
                                        <TextInput
                                            inputName="maxFileSize"
                                            inputLabel="Max File Size"
                                            value={formInputMaxFileSize}
                                            setState={setFormInputMaxFileSize}
                                        />
                                    </div>
                                </div>
                                <div tw="flex flex-row w-full justify-between md:(space-y-0 space-x-4)">
                                    <div tw="w-2/5">
                                        <TextInput
                                            inputName="minFileSize"
                                            inputLabel="Newer Than"
                                            value={formInputMinFileSize}
                                            setState={setFormInputMinFileSize}
                                        />
                                    </div>
                                    <div tw="w-2/5">
                                        <TextInput
                                            inputName="maxFileSize"
                                            inputLabel="Older Than"
                                            value={formInputMaxFileSize}
                                            setState={setFormInputMaxFileSize}
                                        />
                                    </div>
                                </div>
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
