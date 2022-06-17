import tw from 'twin.macro'
import 'styled-components/macro'
import { useEffect, useRef, useState } from 'react'

//========== style ===============
const InputStyle = tw.label`flex flex-col w-2/5 text-base space-y-2 sm:(text-lg space-y-4) md:(w-full space-y-6)`

//========== html input ===============

// Base input interface
interface InputInterface {
    inputName: string
    inputLabel: string
}

// text input
export const TextInput = ({ inputName, inputLabel }: InputInterface) => {
    return (
        <InputStyle>
            <span> {inputLabel} </span>
            <input
                tw="box-border rounded-lg px-2 py-1"
                type="text"
                name={inputName}
            />
        </InputStyle>
    )
}

// select input
interface SelectInputInterface extends InputInterface {
    inputOptions: {
        name: string
        label: string
    }[]
}

export const SelectInput = ({
    inputName,
    inputLabel,
    inputOptions,
}: SelectInputInterface) => {
    return (
        <InputStyle>
            <span> {inputLabel} </span>
            <select
                tw="box-border rounded-lg bg-white px-3 py-2"
                name={inputName}
            >
                {inputOptions.map((obj) => (
                    <option key={obj.name} value={obj.name}>
                        {obj.label}
                    </option>
                ))}
            </select>
        </InputStyle>
    )
}

// multi range slider

interface MultiRangeSliderInputInterface extends InputInterface {
    displayMin: number
    displayMax: number
    initMinVal: number
    initMaxVal: number
    step: number
}

export const MultiRangeSlider = ({
    inputName,
    inputLabel,
    displayMin,
    displayMax,
    initMinVal,
    initMaxVal,
    step,
}: MultiRangeSliderInputInterface) => {
    const [minVal, setMinVal] = useState(initMinVal)
    const [maxVal, setMaxVal] = useState(initMaxVal)
    const sliderRef = useRef<HTMLDivElement | null>(null)

    const handleSliderMin = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (
            maxVal <= displayMax &&
            minVal >= displayMin &&
            maxVal > minVal &&
            maxVal - minVal > step
        ) {
            setMinVal(parseInt(e.target.value))
        }
    }

    const handleSliderMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (
            maxVal <= displayMax &&
            minVal >= displayMin &&
            maxVal > minVal &&
            maxVal - minVal > step
        ) {
            setMaxVal(parseInt(e.target.value))
        }
    }
    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.left = (minVal / displayMax) * step + '%'
            sliderRef.current.style.right =
                step - (maxVal / displayMax) * step + '%'
        }
    }, [minVal, maxVal, displayMax, step])

    return (
        <InputStyle>
            <span> {inputLabel} </span>
            <div tw="flex flex-col w-full space-y-2 md:space-y-4 lg:space-y-6">
                <div tw="flex flex-row w-full justify-between">
                    <input
                        tw="w-full box-border rounded-lg px-3 py-2 text-xs sm:text-sm md:text-base"
                        onChange={(e) => setMinVal(parseInt(e.target.value))}
                        type="number"
                        value={minVal}
                        name="minFileSize"
                        placeholder="min"
                    />
                    <span tw="mx-2 sm:mx-4"> - </span>
                    <input
                        tw="w-full box-border rounded-lg px-2 py-1 text-xs sm:text-sm md:text-base"
                        onChange={(e) => setMaxVal(parseInt(e.target.value))}
                        type="number"
                        value={maxVal}
                        name="maxFileSize"
                        placeholder="max"
                    />
                </div>
                <div tw="relative bg-red-500 rounded-lg"></div>

                <div tw="flex flex-col relative w-full">
                    <div tw="relative top-2 h-1 rounded-lg bg-gray-300">
                        <div
                            tw="absolute h-1 rounded-lg bg-blue-700"
                            ref={sliderRef}
                        ></div>
                    </div>

                    <input
                        tw="absolute top-2 h-1 w-full bg-transparent appearance-none"
                        type="range"
                        onChange={handleSliderMin}
                        value={minVal}
                        min={displayMin}
                        step={step}
                        max={displayMax}
                    />
                    <input
                        tw="absolute top-2 h-1 w-full bg-transparent appearance-none"
                        type="range"
                        onChange={handleSliderMax}
                        value={maxVal}
                        min={displayMin}
                        step={step}
                        max={displayMax}
                    />
                </div>
            </div>
        </InputStyle>
    )
}
