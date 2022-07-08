export interface InputInterface {
    inputName: string
    inputLabel?: string
}

export interface TextInputInterface extends InputInterface {
    value: string
    setState: React.Dispatch<React.SetStateAction<string>>
    isFormOpen?: boolean
    setIsFormOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export interface SelectInputInterface extends InputInterface {
    inputOptions: {
        name: string
        label: string
    }[]
}

export interface MultiRangeSliderInputInterface extends InputInterface {
    displayMin: number
    displayMax: number
    initMinVal: number
    initMaxVal: number
    step: number
}
