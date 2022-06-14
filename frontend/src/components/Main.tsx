import tw from 'twin.macro'
import 'styled-components/macro'

const ContainerBackground = tw.section`w-full h-full p-4 sm:p-6 md:p-8 lg:p-10 bg-blue-100`
const ContainerMain = tw.div`w-full h-full rounded-lg bg-gray-100`
const InputColumn = tw.div`flex flex-row justify-around md:(flex-col items-stretch space-y-8)`

const TextInput = () => {
    return (
        <label tw="flex flex-col w-2/5 text-base sm:text-lg md:(w-full text-xl) space-y-1">
            <span> Filename </span>
            <input tw="rounded-lg" type="text" name="filename" />
        </label>
    )
}
const Main = () => {
    return (
        <ContainerBackground>
            <ContainerMain>
                <div tw="flex flex-col w-full overflow-x-auto space-y-4 md:(flex-row items-center py-4 space-y-0 divide-x divide-blue-700) bg-gray-200">
                    <h1 tw="w-1/6 font-semibold text-lg sm:text-xl md:(pl-8 pr-8 text-2xl) lg:text-3xl xl:text-4xl">
                        Cache
                    </h1>
                    <form tw="flex flex-col w-full py-4 space-y-4 md:(flex-row items-center pl-12 space-x-12 space-y-0)">
                        <InputColumn>
                            <TextInput />
                            <TextInput />
                        </InputColumn>
                        <InputColumn>
                            <TextInput />
                            <TextInput />
                        </InputColumn>
                        <InputColumn>
                            <TextInput />
                            <TextInput />
                        </InputColumn>
                        <div tw="p-2 rounded-lg text-base sm:text-lg md:(px-4 py-2 text-xl) text-gray-100 bg-blue-700">
                            filter
                        </div>
                    </form>
                </div>
                <div>body</div>
            </ContainerMain>
        </ContainerBackground>
    )
}

export default Main
