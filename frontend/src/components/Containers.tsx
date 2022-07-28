import tw from 'twin.macro'
import 'styled-components/macro'
import { useState } from 'react'

// global components
import { HeaderTitle } from './Text'

// icons
import { UpArrow, DownArrow } from './../assets/icons/Arrows'

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
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        tw="self-end md:self-start"
                    >
                        <UpArrow tw="text-gray-900 hover:text-blue-700 h-4 w-4 md:(h-6 w-6)" />
                    </button>
                </div>
            ) : (
                <div tw="flex flex-row justify-between p-4 md:(flex-row justify-between p-6) lg:(p-8) bg-gray-200">
                    <HeaderTitle tw="">Cache</HeaderTitle>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        tw="self-center md:self-start"
                    >
                        <DownArrow tw="text-gray-900 hover:text-blue-700 h-4 w-4 md:(h-6 w-6)" />
                    </button>
                </div>
            )}
        </>
    )
}

export const ContainerBody = tw.div`flex flex-col w-full overflow-x-auto space-y-4 p-4 md:(p-6) lg:p-8 bg-gray-100`
