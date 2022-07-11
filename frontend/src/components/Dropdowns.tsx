import 'twin.macro'
import 'styled-components/macro'
import { forwardRef, useEffect, useState } from 'react'
import { SelectInput, TextInput } from './Inputs'

interface FileSizeDropdownInterface {
    setState: React.Dispatch<
        React.SetStateAction<{ inputValue: string; inputType: string }>
    >
    setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MinFileSizeDropdown = forwardRef(
    (
        { setState, setIsDropdownOpen }: FileSizeDropdownInterface,
        ref: React.Ref<HTMLDivElement>
    ) => {
        const [inputValue, setInputValue] = useState<string>('')
        const [inputType, setInputType] = useState<string>('')

        useEffect(() => {
            setState((prevState) => ({
                ...prevState,
                inputValue: inputValue,
                inputType: inputType,
            }))
        }, [setState, inputValue, inputType])

        return (
            <div
                tw="absolute z-50 w-5/6 bg-white border border-gray-400 rounded-lg mt-1 pt-2 pb-4 px-4 md:(w-full)"
                ref={ref}
            >
                <div tw="flex flex-auto flex-col w-full">
                    <button
                        tw="self-end mb-2"
                        onClick={() => {
                            setIsDropdownOpen(false)
                        }}
                    >
                        x
                    </button>
                    <div tw="flex flex-row space-x-2">
                        <div tw="w-3/5">
                            <TextInput
                                inputName="sizeValue"
                                inputLabel="Value"
                                state={inputValue}
                                setState={setInputValue}
                            />
                        </div>
                        <div tw="w-2/5">
                            <SelectInput
                                inputName="sizeType"
                                inputLabel="Type"
                                state={inputType}
                                setState={setInputType}
                                inputOptions={[
                                    { name: '', label: '' },
                                    { name: 'K', label: 'K' },
                                    { name: 'M', label: 'M' },
                                    { name: 'G', label: 'G' },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
)
