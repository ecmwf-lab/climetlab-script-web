import tw from 'twin.macro'
import 'styled-components/macro'

const Layout = tw.section`flex flex-col w-full h-full p-4 bg-blue-100 md:(p-6) lg:(p-8)`
const Container = tw.div`flex flex-col w-full h-full bg-gray-100 rounded-lg`
const ContainerHeader = tw.div`flex flex-col space-y-4 p-4 md:(flex-row justify-between items-center overflow-x-auto space-y-0 space-x-12 p-6) lg:p-8 bg-gray-200`
const ContainerBody = tw.div`flex flex-col space-y-4 p-4 md:(p-6) lg:p-8 bg-gray-100`
const InputColumn = tw.div`flex flex-row justify-between w-full md:(flex-col space-y-4) lg:(space-y-8)`

const TextInput = () => {
    return (
        <label tw="flex flex-col w-2/5 text-base sm:text-lg md:(w-full)">
            <span> Filename </span>
            <input tw="rounded-lg" type="text" name="filename" />
        </label>
    )
}

const HeaderTitle = tw.h1`h-full font-semibold text-xl sm:text-2xl md:(w-1/5 pr-8 py-12 text-3xl border-r border-blue-700) lg:(text-4xl) xl:(text-5xl)`

const PageCache = () => {
    return (
        <Layout>
            <Container>
                <ContainerHeader>
                    <HeaderTitle>Cache</HeaderTitle>
                    <div tw="flex flex-col w-full space-y-4 md:(flex-row flex-shrink space-y-0 space-x-12)">
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
                    </div>
                    <div tw="self-center md:(self-start text-end)">
                        <button tw="px-2 py-1 rounded-lg text-base text-gray-100 bg-blue-700 md:text-lg">
                            filter
                        </button>
                    </div>
                </ContainerHeader>
                <ContainerBody>body</ContainerBody>
            </Container>
        </Layout>
    )
}

export default PageCache
