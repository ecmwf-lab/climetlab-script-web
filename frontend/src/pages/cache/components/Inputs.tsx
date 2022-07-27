import 'twin.macro'
import 'styled-components/macro'

import { useState } from 'react'

// global components
import { TextInput, SelectInput } from '../../../components/Inputs'

// local components
import { FileDateDropdown, FileSizeDropdown } from './Dropdowns'

//===============================================================
// Search
//===============================================================
export const SearchInput = ({
    state,
    setState,
}: {
    state: string
    setState: React.Dispatch<React.SetStateAction<string>>
}) => {
    return (
        <TextInput
            inputName="search"
            inputLabel="Search"
            state={state}
            setState={setState}
        />
    )
}

//===============================================================
// File Type
//===============================================================
export const FileTypeInput = ({
    state,
    setState,
}: {
    state: string
    setState: React.Dispatch<React.SetStateAction<string>>
}) => {
    return (
        <SelectInput
            inputName="fileType"
            inputLabel="File Type"
            state={state}
            setState={setState}
            inputOptions={[
                { name: '', label: '' },
                { name: 'grib', label: 'GRIB' },
                { name: 'netcdf', label: 'NetCDF' },
            ]}
        />
    )
}

//===============================================================
// File Size
//===============================================================

export const FileSizeInput = ({
    variant,
    state,
    setState,
    dropdownAligment,
}: {
    variant: 'larger' | 'smaller'
    state: {
        inputValue: string
        inputType: string
    }
    setState: React.Dispatch<
        React.SetStateAction<{
            inputValue: string
            inputType: string
        }>
    >
    dropdownAligment: 'left' | 'right'
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

    return (
        <>
            <TextInput
                inputName={`${variant}ThanFileSize`}
                inputLabel={`${
                    variant.charAt(0).toUpperCase() + variant.slice(1)
                }`} // capitalize first letter
                state={`${state.inputValue} ${state.inputType}`}
                setIsDropdownOpen={setIsDropdownOpen}
            />
            {isDropdownOpen && (
                <div tw="mt-1 w-5/6 md:w-full">
                    <FileSizeDropdown
                        state={state}
                        setState={setState}
                        dropdownAligment={dropdownAligment}
                        setIsDropdownOpen={setIsDropdownOpen}
                    />
                </div>
            )}
        </>
    )
}

//===============================================================
// File Date
//===============================================================
export const FileDateInput = ({
    variant,
    state,
    setState,
}: {
    variant: 'newer' | 'older'
    state: {
        inputValue: string
        inputType: string
    }
    setState: React.Dispatch<
        React.SetStateAction<{
            inputValue: string
            inputType: string
        }>
    >
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

    return (
        <>
            <TextInput
                inputName={`${variant}ThanFileDate`}
                inputLabel={`${
                    variant.charAt(0).toUpperCase() + variant.slice(1)
                }`} // capitalize first letter
                state={`${state.inputValue} ${state.inputType}`}
                setIsDropdownOpen={setIsDropdownOpen}
            />
            {isDropdownOpen && (
                <FileDateDropdown
                    state={state}
                    setState={setState}
                    setIsDropdownOpen={setIsDropdownOpen}
                />
            )}
        </>
    )
}
