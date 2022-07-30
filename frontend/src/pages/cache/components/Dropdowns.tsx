import 'twin.macro'
import 'styled-components/macro'

import { useEffect, useState } from 'react'

// global components
import Dropdown from './../../../components/Dropdown'
import { SelectInput, TextInput } from './../../../components/Inputs'

//===================================================
// Size
//===================================================

// interface
interface FileSizeDropdownInterface {
    state: { inputValue: string; inputType: string }
    setState: React.Dispatch<
        React.SetStateAction<{ inputValue: string; inputType: string }>
    >
    headerLabel: string
    setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
}

// component
export const FileSizeDropdown = ({
    state,
    setState,
    headerLabel,
    setIsDropdownOpen,
}: FileSizeDropdownInterface) => {
    // Local form state.
    const [inputType, setInputType] = useState(state.inputType)
    const [inputValue, setInputValue] = useState(state.inputValue)

    // Update state in the parent component.
    useEffect(() => {
        setState({ inputValue: inputValue, inputType: inputType })
    }, [setState, inputValue, inputType])

    return (
        <Dropdown
            usedFor="input"
            headerLabel={headerLabel}
            setIsDropdownOpen={setIsDropdownOpen}
        >
            {/* Input by default are set to w-full. */}
            {/* Therefore, we use external divs to control for width. */}
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
        </Dropdown>
    )
}

//===================================================
// Date
//===================================================

// interface
interface FileDateDropdownInterface {
    state: { inputValue: string; inputType: string }
    setState: React.Dispatch<
        React.SetStateAction<{ inputValue: string; inputType: string }>
    >
    headerLabel: string
    setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
}

// component
export const FileDateDropdown = ({
    state,
    setState,
    headerLabel,
    setIsDropdownOpen,
}: FileDateDropdownInterface) => {
    // Local form state.
    const [inputType, setInputType] = useState(state.inputType)
    const [inputValue, setInputValue] = useState(state.inputValue)

    // Update state in the parent component.
    useEffect(() => {
        setState({ inputValue: inputValue, inputType: inputType })
    }, [setState, inputValue, inputType])

    return (
        <Dropdown
            usedFor="input"
            headerLabel={headerLabel}
            setIsDropdownOpen={setIsDropdownOpen}
        >
            {/* Input by default are set to w-full. */}
            {/* Therefore, we use external divs to control for width. */}
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
        </Dropdown>
    )
}
