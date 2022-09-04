export const isObject = (obj: any) => {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

export const sliceForDisplay = (inputString: string) => {
    if (inputString) {
        const displayString =
            inputString.slice(0, 7) +
            '...' +
            inputString.slice(inputString.length - 3, inputString.length)

        return displayString
    }
}

export const convertBytesToX = (inputSize: number) => {
    if (inputSize < 1024) {
        return inputSize + ' bytes'
    } else if (inputSize >= 1024 && inputSize < 1048576) {
        return inputSize / 1024 + 'Kb'
    } else if (inputSize >= 1048576) {
        return inputSize / 1048576 + 'Mb'
    }
}
