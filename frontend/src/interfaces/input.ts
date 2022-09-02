import { CacheInterface } from './../pages/cache/interfaces/cache'

export interface InputInterface {
    inputName: string
    inputLabel?: string
}

export interface CheckboxInputInterface extends InputInterface {
    isChecked?: boolean
    state: CacheInterface[]
    setState?: React.Dispatch<React.SetStateAction<CacheInterface[]>>
}

export interface TextInputInterface extends InputInterface {
    state: string
    setState?: React.Dispatch<React.SetStateAction<string>>
    setIsDropdownOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export interface SelectInputInterface extends InputInterface {
    state: string
    setState: React.Dispatch<React.SetStateAction<string>>
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
