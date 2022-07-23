import tw from 'twin.macro'
import 'styled-components/macro'
import { forwardRef } from 'react'
import { SelectInput, TextInput } from './Inputs'
import { DropdownInterface } from './../interfaces/dropdown'
import useUpdateParentState from './../hooks/useUpdateParentStateInterface'

const DropdownContainer = tw.div`absolute w-5/6 bg-white border border-gray-400 rounded-lg mt-1 pt-2 pb-4 px-4 md:(w-full mt-2)`
const DropdownLayout = tw.div`flex flex-auto flex-col w-full`
const DropdownBody = tw.div`flex flex-row space-x-2`

// const DropdownLayout = ({
//     setIsDropdownOpen,
//     children,
// }: {
//     setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
//     children: React.ReactNode
// }) => {
//     return (
//         <div tw="flex flex-auto flex-col w-full">
//             <button
//                 tw="self-end mb-2"
//                 onClick={() => {
//                     setIsDropdownOpen(false)
//                 }}
//             >
//                 x
//             </button>
//             {children}
//         </div>
//     )
// }
//
// const FileSizeDropdown = ({
//     inputValue,
//     setInputValue,
//     inputType,
//     setInputType,
//     setIsDropdownOpen,
// }: {
//     inputValue: string
//     setInputValue: React.Dispatch<React.SetStateAction<string>>
//     inputType: string
//     setInputType: React.Dispatch<React.SetStateAction<string>>
//     setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
// }) => {
//     return (
//         <DropdownBody>
//             <div tw="w-3/5">
//                 <TextInput
//                     inputName="sizeValue"
//                     inputLabel="Value"
//                     state={inputValue}
//                     setState={setInputValue}
//                 />
//             </div>
//             <div tw="w-2/5">
//                 <SelectInput
//                     inputName="sizeType"
//                     inputLabel="Type"
//                     state={inputType}
//                     setState={setInputType}
//                     inputOptions={[
//                         { name: '', label: '' },
//                         { name: 'K', label: 'K' },
//                         { name: 'M', label: 'M' },
//                         { name: 'G', label: 'G' },
//                     ]}
//                 />
//             </div>
//         </DropdownBody>
//     )
// }

// File date ropdown
const FileDateDropdown = ({
    inputValue,
    setInputValue,
    inputType,
    setInputType,
    setIsDropdownOpen,
}: {
    inputValue: string
    setInputValue: React.Dispatch<React.SetStateAction<string>>
    inputType: string
    setInputType: React.Dispatch<React.SetStateAction<string>>
    setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return (
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
                            { name: 'd', label: 'd' },
                            { name: 'h', label: 'h' },
                            { name: 'm', label: 'm' },
                            { name: 's', label: 's' },
                        ]}
                    />
                </div>
            </DropdownBody>
        </DropdownLayout>
    )
}

export const NewerThanFileDateDropdown = forwardRef(
    (
        { setState, setIsDropdownOpen }: DropdownInterface,
        ref: React.Ref<HTMLDivElement>
    ) => {
        const [inputValue, setInputValue, inputType, setInputType] =
            useUpdateParentState({ setState: setState })

        return (
            <DropdownContainer ref={ref}>
                <FileDateDropdown
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    inputType={inputType}
                    setInputType={setInputType}
                    setIsDropdownOpen={setIsDropdownOpen}
                />
            </DropdownContainer>
        )
    }
)

export const OlderThanFileDateDropdown = forwardRef(
    (
        { setState, setIsDropdownOpen }: DropdownInterface,
        ref: React.Ref<HTMLDivElement>
    ) => {
        const [inputValue, setInputValue, inputType, setInputType] =
            useUpdateParentState({ setState: setState })

        return (
            <DropdownContainer ref={ref}>
                <FileDateDropdown
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    inputType={inputType}
                    setInputType={setInputType}
                    setIsDropdownOpen={setIsDropdownOpen}
                />
            </DropdownContainer>
        )
    }
)

// File size dropdown
const FileSizeDropdown = ({
    inputValue,
    setInputValue,
    inputType,
    setInputType,
    setIsDropdownOpen,
}: {
    inputValue: string
    setInputValue: React.Dispatch<React.SetStateAction<string>>
    inputType: string
    setInputType: React.Dispatch<React.SetStateAction<string>>
    setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return (
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
    )
}

export const LargerThanFileSizeDropdown = forwardRef(
    (
        { setState, setIsDropdownOpen }: DropdownInterface,
        ref: React.Ref<HTMLDivElement>
    ) => {
        const [inputValue, setInputValue, inputType, setInputType] =
            useUpdateParentState({ setState: setState })

        return (
            <DropdownContainer ref={ref}>
                <FileSizeDropdown
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    inputType={inputType}
                    setInputType={setInputType}
                    setIsDropdownOpen={setIsDropdownOpen}
                />
            </DropdownContainer>
        )
    }
)

export const SmallerThanFileSizeDropdown = forwardRef(
    (
        { setState, setIsDropdownOpen }: DropdownInterface,
        ref: React.Ref<HTMLDivElement>
    ) => {
        const [inputValue, setInputValue, inputType, setInputType] =
            useUpdateParentState({ setState: setState })

        return (
            <DropdownContainer ref={ref}>
                <FileSizeDropdown
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    inputType={inputType}
                    setInputType={setInputType}
                    setIsDropdownOpen={setIsDropdownOpen}
                />
            </DropdownContainer>
        )
    }
)
