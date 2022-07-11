export interface FileSizeDropdownInterface {
    setState: React.Dispatch<
        React.SetStateAction<{ inputValue: string; inputType: string }>
    >
    setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
}
