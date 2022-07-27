import tw, { styled } from 'twin.macro'
// import tw from 'twin.macro'
import 'styled-components/macro'

// hooks
import useClickOutside from '../hooks/useClickOutside'

// icons
import { Close } from './../assets/icons/Close'

const DropdownContainer = tw.div`absolute w-5/6 bg-white border border-gray-400 rounded-lg mt-1 pt-2 pb-4 px-4 md:(w-full mt-2)`
const DropdownLayout = tw.div`flex flex-auto flex-col w-full`
const DropdownBody = tw.div`flex flex-row space-x-2`

export const Dropdown = ({
    setIsDropdownOpen,
    children,
}: {
    setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
}) => {
    // ref to close dropdown on clicking outside it.
    const ref = useClickOutside(() => setIsDropdownOpen(false))

    return (
        <DropdownContainer ref={ref}>
            <DropdownLayout>
                <button
                    tw="self-end mt-1 mb-4 md:(mt-2 mb-6)"
                    onClick={() => {
                        setIsDropdownOpen(false)
                    }}
                >
                    <Close tw="h-4 w-4 md:(h-5 w-5)" />
                </button>
                <DropdownBody>{children}</DropdownBody>
            </DropdownLayout>
        </DropdownContainer>
    )
}

const DropdownContainerNEW = styled.div(
    ({ dropdownAligment }: { dropdownAligment: string }) => [
        tw`absolute flex flex-col w-full bg-white border border-gray-400 rounded-lg pt-2 pb-4 px-4`,
        dropdownAligment === 'left' && tw`right-0`,
        dropdownAligment === 'right' && tw`left-0 md:(left-full right-0)`,
    ]
)

// const DropdownContainerNEW = tw.div`absolute flex flex-col w-full bg-white border border-gray-400 rounded-lg pt-2 pb-4 px-4`
const DropdownHeaderNEW = tw.div`flex flex-row justify-end w-full`
const DropdownBodyNEW = tw.div`flex flex-row space-x-2`

export const DropdownNEW = ({
    setIsDropdownOpen,
    dropdownAligment,
    children,
}: {
    setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
    dropdownAligment: 'left' | 'right'
    children: React.ReactNode
}) => {
    // ref to close dropdown on clicking outside it.
    const ref = useClickOutside(() => setIsDropdownOpen(false))

    return (
        <DropdownContainerNEW {...{ dropdownAligment }} ref={ref}>
            <DropdownHeaderNEW>
                <button
                    tw="mt-1 mb-4 md:(mt-2 mb-6)"
                    onClick={() => {
                        setIsDropdownOpen(false)
                    }}
                >
                    <Close tw="h-4 w-4 md:(h-5 w-5)" />
                </button>
            </DropdownHeaderNEW>
            <DropdownBodyNEW>{children}</DropdownBodyNEW>
        </DropdownContainerNEW>
    )
}

export default Dropdown
// export default Dropdown
