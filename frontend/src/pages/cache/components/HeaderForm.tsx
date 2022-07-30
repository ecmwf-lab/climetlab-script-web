import 'twin.macro'
import 'styled-components/macro'

import axios from 'axios'
import { useState } from 'react'

// global components
import { SubmitButton } from './../../../components/Buttons'

// local components
import { InputColumn, InputRow } from './Containers'
import {
    SearchInput,
    FileTypeInput,
    FileSizeInput,
    FileDateInput,
} from './Inputs'

// interfaces
import { CacheInterface } from './../interfaces/cache'

const HeaderForm = ({
    setCacheData,
}: {
    setCacheData: React.Dispatch<React.SetStateAction<CacheInterface[]>>
}) => {
    // ================================
    // form input states
    // ================================

    // ======= text search =======
    const [inputSearch, setInputSearch] = useState<string>('')

    // ======= file type =======
    const [inputFileType, setInputFileType] = useState<string>('')

    // ======= file size - larger =======
    const [inputLargerThanFileSize, setInputLargerThanFileSize] = useState<{
        inputValue: string
        inputType: string
    }>({
        inputValue: '',
        inputType: '',
    })

    // ======= file size - smaller =======
    const [inputSmallerThanFileSize, setInputSmallerThanFileSize] = useState<{
        inputValue: string
        inputType: string
    }>({
        inputValue: '',
        inputType: '',
    })

    // ======= file date - newer =======
    const [inputNewerThanFileDate, setInputNewerThanFileDate] = useState<{
        inputValue: string
        inputType: string
    }>({
        inputValue: '',
        inputType: '',
    })

    // ======= file date - older =======
    const [inputOlderThanFileDate, setInputOlderThanFileDate] = useState<{
        inputValue: string
        inputType: string
    }>({
        inputValue: '',
        inputType: '',
    })

    // ================================
    // submit form to search cache
    // based on provided input
    // ================================
    const cacheFormSubmit = (event: React.SyntheticEvent) => {
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
            .get('/api/cache', { params: queryObj })
            .then((res) => setCacheData(res.data.data))
    }

    return (
        <form
            onSubmit={cacheFormSubmit}
            tw="flex flex-col w-full space-y-4 h-full w-full md:(flex-row justify-between)"
        >
            {/* 'Row/Column' in component names are based on desktop layout and not mobile layout. */}
            <InputRow>
                <InputColumn>
                    <SearchInput
                        state={inputSearch}
                        setState={setInputSearch}
                    />
                    <FileTypeInput
                        state={inputFileType}
                        setState={setInputFileType}
                    />
                </InputColumn>
                <InputColumn>
                    <div tw="relative z-10 flex flex-row w-full justify-between md:(space-y-0 space-x-4)">
                        <div tw="w-2/5">
                            <FileSizeInput
                                variant="larger"
                                state={inputLargerThanFileSize}
                                setState={setInputLargerThanFileSize}
                            />
                        </div>
                        <div tw="w-2/5">
                            <FileSizeInput
                                variant="smaller"
                                state={inputSmallerThanFileSize}
                                setState={setInputSmallerThanFileSize}
                            />
                        </div>
                    </div>
                    <div tw="relative flex flex-row w-full justify-between md:(space-y-0 space-x-4)">
                        <div tw="w-2/5">
                            <FileDateInput
                                variant="newer"
                                state={inputNewerThanFileDate}
                                setState={setInputNewerThanFileDate}
                            />
                        </div>
                        <div tw="w-2/5">
                            <FileDateInput
                                variant="older"
                                state={inputOlderThanFileDate}
                                setState={setInputOlderThanFileDate}
                            />
                        </div>
                    </div>
                </InputColumn>
            </InputRow>
            <div tw="self-center md:(self-end text-end pl-16)">
                <SubmitButton>apply</SubmitButton>
            </div>
        </form>
    )
}

export default HeaderForm
