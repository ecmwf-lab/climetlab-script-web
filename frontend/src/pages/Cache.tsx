import 'twin.macro'
import 'styled-components/macro'

import axios from 'axios'
import { useEffect, useState } from 'react'
import useClickOutside from './../hooks/useClickOutside'

import {
    Layout,
    Container,
    ContainerHeader,
    ContainerBody,
    InputColumn,
} from './../components/LayoutContainers'
import {
    LargerThanFileSizeDropdown,
    SmallerThanFileSizeDropdown,
    NewerThanFileDateDropdown,
    OlderThanFileDateDropdown,
} from './../components/Dropdowns'
import { HeaderTitle } from './../components/Text'
import { CacheTable } from './../components/Tables'
import { SubmitButton } from './../components/Buttons'
import { TextInput, SelectInput } from './../components/Inputs'

import { CacheInterface, CacheResponseInterface } from './../interfaces/cache'

const Cache = () => {
    // form input
    const [inputSearch, setInputSearch] = useState<string>('')

    const [inputLargerThanFileSize, setInputLargerThanFileSize] = useState<{
        inputValue: string
        inputType: string
    }>({
        inputValue: '',
        inputType: '',
    })
    const [inputSmallerThanFileSize, setInputSmallerThanFileSize] = useState<{
        inputValue: string
        inputType: string
    }>({
        inputValue: '',
        inputType: '',
    })

    const [inputNewerThanFileDate, setInputNewerThanFileDate] = useState<{
        inputValue: string
        inputType: string
    }>({
        inputValue: '',
        inputType: '',
    })
    const [inputOlderThanFileDate, setInputOlderThanFileDate] = useState<{
        inputValue: string
        inputType: string
    }>({
        inputValue: '',
        inputType: '',
    })

    const [inputFileType, setInputFileType] = useState<string>('')

    // dropwdown open/close
    const [
        isLargerThanFileSizeDropdownOpen,
        setIsLargerThanFileSizeDropdownOpen,
    ] = useState<boolean>(false)

    const [
        isSmallerThanFileSizeDropdownOpen,
        setIsSmallerThanFileSizeDropdownOpen,
    ] = useState<boolean>(false)

    const [
        isNewerThanFileDateDropdownOpen,
        setIsNewerThanFileDateDropdownOpen,
    ] = useState<boolean>(false)
    const [
        isOlderThanFileDateDropdownOpen,
        setIsOlderThanFileDateDropdownOpen,
    ] = useState<boolean>(false)

    // cache response
    const [cacheData, setCacheData] = useState<CacheInterface[]>([])

    // close input menu by click outside
    const largerThanFileSizeDropdownRef = useClickOutside(() =>
        setIsLargerThanFileSizeDropdownOpen(false)
    )
    const smallerThanFileSizeDropdownRef = useClickOutside(() =>
        setIsSmallerThanFileSizeDropdownOpen(false)
    )

    const newerThanFileDateDropdownRef = useClickOutside(() =>
        setIsNewerThanFileDateDropdownOpen(false)
    )
    const olderThanFileDateDropdownRef = useClickOutside(() =>
        setIsOlderThanFileDateDropdownOpen(false)
    )

    // submit form to search cache based on provided input
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const queryObj = {
            match: inputSearch,
            larger:
                inputLargerThanFileSize.inputValue +
                inputLargerThanFileSize.inputType,
            smaller:
                inputSmallerThanFileSize.inputValue +
                inputSmallerThanFileSize.inputType,
        }
        axios
            // .get('/api/cache', { params: { match: inputSearch } })
            .get('/api/cache', { params: queryObj })
            .then((res) => setCacheData(res.data.data))
    }

    // display all cache on first page load
    useEffect(() => {
        axios
            .get<CacheResponseInterface>('/api/cache')
            .then((res) => setCacheData(res.data.data))
    }, [])

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
                                <div tw="relative z-10 flex flex-row w-full justify-between md:(space-y-0 space-x-4)">
                                    <div tw="w-2/5">
                                        <TextInput
                                            inputName="minFileSize"
                                            inputLabel="Min File Size"
                                            state={`${inputLargerThanFileSize.inputValue} ${inputLargerThanFileSize.inputType}`}
                                            setIsDropdownOpen={
                                                setIsLargerThanFileSizeDropdownOpen
                                            }
                                        />
                                        {isLargerThanFileSizeDropdownOpen && (
                                            <LargerThanFileSizeDropdown
                                                setState={
                                                    setInputLargerThanFileSize
                                                }
                                                setIsDropdownOpen={
                                                    setIsLargerThanFileSizeDropdownOpen
                                                }
                                                ref={
                                                    largerThanFileSizeDropdownRef
                                                }
                                            />
                                        )}
                                    </div>
                                    <div tw="w-2/5">
                                        <TextInput
                                            inputName="maxFileSize"
                                            inputLabel="Max File Size"
                                            state={`${inputSmallerThanFileSize.inputValue} ${inputSmallerThanFileSize.inputType}`}
                                            setIsDropdownOpen={
                                                setIsSmallerThanFileSizeDropdownOpen
                                            }
                                        />
                                        {isSmallerThanFileSizeDropdownOpen && (
                                            <SmallerThanFileSizeDropdown
                                                setState={
                                                    setInputSmallerThanFileSize
                                                }
                                                setIsDropdownOpen={
                                                    setIsSmallerThanFileSizeDropdownOpen
                                                }
                                                ref={
                                                    smallerThanFileSizeDropdownRef
                                                }
                                            />
                                        )}
                                    </div>
                                </div>
                                <div tw="relative flex flex-row w-full justify-between md:(space-y-0 space-x-4)">
                                    <div tw="w-2/5">
                                        <TextInput
                                            inputName="newerThanFileDate"
                                            inputLabel="Newer Than"
                                            state={`${inputNewerThanFileDate.inputValue} ${inputNewerThanFileDate.inputType}`}
                                            setIsDropdownOpen={
                                                setIsNewerThanFileDateDropdownOpen
                                            }
                                        />
                                        {isNewerThanFileDateDropdownOpen && (
                                            <NewerThanFileDateDropdown
                                                setState={
                                                    setInputNewerThanFileDate
                                                }
                                                setIsDropdownOpen={
                                                    setIsNewerThanFileDateDropdownOpen
                                                }
                                                ref={
                                                    newerThanFileDateDropdownRef
                                                }
                                            />
                                        )}
                                    </div>
                                    <div tw="w-2/5">
                                        <TextInput
                                            inputName="olderThanFileDate"
                                            inputLabel="Older Than"
                                            state={`${inputOlderThanFileDate.inputValue} ${inputOlderThanFileDate.inputType}`}
                                            setIsDropdownOpen={
                                                setIsOlderThanFileDateDropdownOpen
                                            }
                                        />
                                        {isOlderThanFileDateDropdownOpen && (
                                            <OlderThanFileDateDropdown
                                                setState={
                                                    setInputOlderThanFileDate
                                                }
                                                setIsDropdownOpen={
                                                    setIsOlderThanFileDateDropdownOpen
                                                }
                                                ref={
                                                    olderThanFileDateDropdownRef
                                                }
                                            />
                                        )}
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
