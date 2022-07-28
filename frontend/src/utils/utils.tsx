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
