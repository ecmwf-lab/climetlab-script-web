import { useEffect, useState } from 'react'

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

export default useUpdateParentState
