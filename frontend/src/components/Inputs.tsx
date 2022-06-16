import tw from 'twin.macro'
import 'styled-components/macro'

// style
const InputStyle = tw.label`flex flex-col w-2/5 text-base sm:text-lg md:(w-full)`

// html input
interface InputInterface {
    inputName: string
    inputLabel: string
}

export const TextInput = ({ inputName, inputLabel }: InputInterface) => {
    return (
        <InputStyle>
            <span> {inputLabel} </span>
            <input tw="rounded-lg px-2 py-1" type="text" name={inputName} />
        </InputStyle>
    )
}

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
            <select tw="rounded-lg bg-white px-3 py-2" name={inputName}>
                {inputOptions.map((obj) => (
                    <option key={obj.name} value={obj.name}>
                        {obj.label}
                    </option>
                ))}
            </select>
        </InputStyle>
    )
}
