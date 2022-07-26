import tw from 'twin.macro'
import 'styled-components/macro'
import { useState } from 'react'
import { HeaderTitle } from './Text'

export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <section tw="flex flex-col w-full h-full p-4 bg-blue-100 md:(p-6) lg:(p-8)">
            <div tw="flex flex-col w-full h-full bg-gray-100 rounded-lg">
                {children}
            </div>
        </section>
    )
}

export const ContainerHeader = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    return (
        <>
            {isOpen ? (
                <div tw="flex flex-col space-y-4 p-4 md:(flex-row justify-between items-center space-y-0 space-x-12 p-6) lg:(p-8) bg-gray-200">
                    <HeaderTitle tw="md:(py-16 border-r border-gray-900)">
                        Cache
                    </HeaderTitle>
                    {children}
                    <button onClick={() => setIsOpen(!isOpen)} tw="self-end">
                        close
                    </button>
                </div>
            ) : (
                <div tw="flex flex-row justify-between p-4 md:(flex-row justify-between p-6) lg:(p-8) bg-gray-200">
                    <HeaderTitle tw="">Cache</HeaderTitle>
                    <button onClick={() => setIsOpen(!isOpen)} tw="self-end">
                        open
                    </button>
                </div>
            )}
        </>
    )
}
// export const ContainerHeader = tw.div`flex flex-col space-y-4 p-4 md:(flex-row justify-between items-center space-y-0 space-x-12 p-6) lg:(p-8) bg-gray-200`
export const ContainerBody = tw.div`flex flex-col w-full overflow-x-auto space-y-4 p-4 md:(p-6) lg:p-8 bg-gray-100`
