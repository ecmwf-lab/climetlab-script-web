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
import {
    MinFileSizeDropdown,
    MaxFileSizeDropdown,
} from './../components/Dropdowns'
import { TextInput, SelectInput } from './../components/Inputs'

import { CacheInterface } from './../interfaces/cache'

const Cache = () => {
    // form input
    const [inputSearch, setInputSearch] = useState<string>('')
    const [inputMinFileSize, setInputMinFileSize] = useState<{
        inputValue: string
        inputType: string
    }>({
        inputValue: '',
        inputType: '',
    })
    const [inputMaxFileSize, setInputMaxFileSize] = useState<{
        inputValue: string
        inputType: string
    }>({
        inputValue: '',
        inputType: '',
    })
    const [inputFileType, setInputFileType] = useState<string>('')

    // dropwdown open/close
    const [isMinFileSizeDropdownOpen, setIsMinFileSizeDropdownOpen] =
        useState<boolean>(false)

    const [isMaxFileSizeDropdownOpen, setIsMaxFileSizeDropdownOpen] =
        useState<boolean>(false)

    // cache response
    const [cacheData, setCacheData] = useState<CacheInterface[]>([])

    // close input menu by click outside
    const minFileSizeDropdownRef = useClickOutside(() =>
        setIsMinFileSizeDropdownOpen(false)
    )

    const maxFileSizeDropdownRef = useClickOutside(() =>
        setIsMaxFileSizeDropdownOpen(false)
    )
    // TODO: CONVERT THE FORM INPUT STATE INTO AN OBJECT
    // submit form to search cache based on provided input
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const queryObj = {
            match: inputSearch,
            larger: inputMinFileSize.inputValue + inputMinFileSize.inputType,
            smaller: inputMaxFileSize.inputValue + inputMaxFileSize.inputType,
        }
        axios
            // .get('/api/cache', { params: { match: inputSearch } })
            .get('/api/cache', { params: queryObj })
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
                                    state={inputSearch}
                                    setState={setInputSearch}
                                />
                                <SelectInput
                                    inputName="fileType"
                                    inputLabel="File Type"
                                    state={inputFileType}
                                    setState={setInputFileType}
                                    inputOptions={[
                                        { name: '', label: '' },
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
                                            state={`${inputMinFileSize.inputValue} ${inputMinFileSize.inputType}`}
                                            setIsDropdownOpen={
                                                setIsMinFileSizeDropdownOpen
                                            }
                                        />
                                        {isMinFileSizeDropdownOpen && (
                                            <MinFileSizeDropdown
                                                setState={setInputMinFileSize}
                                                setIsDropdownOpen={
                                                    setIsMinFileSizeDropdownOpen
                                                }
                                                ref={minFileSizeDropdownRef}
                                            />
                                        )}
                                    </div>
                                    <div tw="w-2/5">
                                        <TextInput
                                            inputName="maxFileSize"
                                            inputLabel="Max File Size"
                                            state={`${inputMaxFileSize.inputValue} ${inputMaxFileSize.inputType}`}
                                            setIsDropdownOpen={
                                                setIsMaxFileSizeDropdownOpen
                                            }
                                        />
                                        {isMaxFileSizeDropdownOpen && (
                                            <MaxFileSizeDropdown
                                                setState={setInputMaxFileSize}
                                                setIsDropdownOpen={
                                                    setIsMaxFileSizeDropdownOpen
                                                }
                                                ref={maxFileSizeDropdownRef}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div tw="flex flex-row w-full justify-between md:(space-y-0 space-x-4)">
                                    <div tw="w-2/5">
                                        {/* <TextInput */}
                                        {/*     inputName="minFileSize" */}
                                        {/*     inputLabel="Newer Than" */}
                                        {/*     state={inputMinFileSize} */}
                                        {/*     setState={setInputMinFileSize} */}
                                        {/* /> */}
                                    </div>
                                    <div tw="w-2/5">
                                        {/* <TextInput */}
                                        {/*     inputName="maxFileSize" */}
                                        {/*     inputLabel="Older Than" */}
                                        {/*     state={inputMaxFileSize} */}
                                        {/*     setState={setInputMaxFileSize} */}
                                        {/* /> */}
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
