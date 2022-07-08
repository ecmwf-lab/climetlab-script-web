import 'twin.macro'
import 'styled-components/macro'
import { forwardRef } from 'react'

interface FileSizePickerInterface {
    testProp: string
}

export const FileSizePicker = forwardRef(
    ({ testProp }: FileSizePickerInterface, ref: React.Ref<HTMLDivElement>) => {
        return (
            <div tw="absolute z-50 bg-blue-200 mt-1 p-4" ref={ref}>
                <p> pick file size = {testProp}</p>
            </div>
        )
    }
)
