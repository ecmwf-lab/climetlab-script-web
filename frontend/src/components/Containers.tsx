import tw from 'twin.macro'
import 'styled-components/macro'

export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <section tw="flex flex-col w-full h-full p-4 bg-blue-100 md:(p-6) lg:(p-8)">
            <div tw="flex flex-col w-full h-full bg-gray-100 rounded-lg">
                {children}
            </div>
        </section>
    )
}
export const ContainerHeader = tw.div`flex flex-col space-y-4 p-4 md:(flex-row justify-between items-center space-y-0 space-x-12 p-6) lg:(p-8) bg-gray-200`
export const ContainerBody = tw.div`flex flex-col w-full overflow-x-auto space-y-4 p-4 md:(p-6) lg:p-8 bg-gray-100`
