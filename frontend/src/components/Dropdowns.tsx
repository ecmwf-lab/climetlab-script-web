import tw from 'twin.macro'
import 'styled-components/macro'
import { forwardRef, useEffect, useState } from 'react'
import { SelectInput, TextInput } from './Inputs'
import { FileSizeDropdownInterface } from './../interfaces/dropdown'

const DropdownContainer = tw.div`absolute w-5/6 bg-white border border-gray-400 rounded-lg mt-1 pt-2 pb-4 px-4 md:(w-full mt-2)`
const DropdownLayout = tw.div`flex flex-auto flex-col w-full`
const DropdownBody = tw.div`flex flex-row space-x-2`

interface useUpdateParentStateInterface {
    setState: React.Dispatch<
        React.SetStateAction<{ inputValue: string; inputType: string }>
    >
}

const useUpdateParentState = ({ setState }: useUpdateParentStateInterface) => {
    const [inputValue, setInputValue] = useState<string>('')
    const [inputType, setInputType] = useState<string>('')

    useEffect(() => {
        setState((prevState) => ({
            ...prevState,
            inputValue: inputValue,
            inputType: inputType,
        }))
    }, [setState, inputValue, inputType])

    return [inputValue, setInputValue, inputType, setInputType] as const
}

export const MinFileSizeDropdown = forwardRef(
    (
        { setState, setIsDropdownOpen }: FileSizeDropdownInterface,
        ref: React.Ref<HTMLDivElement>
    ) => {
        const [inputValue, setInputValue, inputType, setInputType] =
            useUpdateParentState({ setState: setState })

        return (
            <DropdownContainer ref={ref}>
                <DropdownLayout>
                    <button
                        tw="self-end mb-2"
                        onClick={() => {
                            setIsDropdownOpen(false)
                        }}
                    >
                        x
                    </button>
                    <DropdownBody>
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
                    </DropdownBody>
                </DropdownLayout>
            </DropdownContainer>
        )
    }
)

export const MaxFileSizeDropdown = forwardRef(
    (
        { setState, setIsDropdownOpen }: FileSizeDropdownInterface,
        ref: React.Ref<HTMLDivElement>
    ) => {
        const [inputValue, setInputValue, inputType, setInputType] =
            useUpdateParentState({ setState: setState })

        return (
            <DropdownContainer ref={ref}>
                <DropdownLayout>
                    <button
                        tw="self-end mb-2"
                        onClick={() => {
                            setIsDropdownOpen(false)
                        }}
                    >
                        x
                    </button>
                    <DropdownBody>
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
                    </DropdownBody>
                </DropdownLayout>
            </DropdownContainer>
        )
    }
)
