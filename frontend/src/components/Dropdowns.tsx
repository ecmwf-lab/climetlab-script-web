import tw, { styled } from 'twin.macro'
// import tw from 'twin.macro'
import 'styled-components/macro'

// hooks
import useClickOutside from '../hooks/useClickOutside'

// icons
import { Close } from './../assets/icons/Close'

// define styled components
const DropdownContainer = styled.div(({ usedFor }: { usedFor: string }) => [
    tw`absolute flex flex-col w-full bg-white border border-gray-400 rounded-lg pt-2 pb-4 px-4`,
    usedFor === 'input' && tw`right-0 md:right-auto mt-1 md:mt-2`,
    usedFor === 'table' && tw`relative z-20 absolute right-0 w-64`,
])

const DropdownHeader = tw.div`flex flex-row justify-between mt-1 mb-4 text-gray-500 md:(mt-2 mb-8) `
const DropdownBody = tw.div`flex flex-row space-x-2 overflow-auto`

const Dropdown = ({
    usedFor,
    headerLabel,
    setIsDropdownOpen,
    children,
}: {
    usedFor: 'input' | 'table'
    headerLabel: string
    setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
}) => {
    // ref to close dropdown on clicking outside it.
    const ref = useClickOutside(() => setIsDropdownOpen(false))

    return (
        <DropdownContainer {...{ usedFor }} ref={ref}>
            <DropdownHeader>
                <h3>{headerLabel}</h3>
                <button
                    onClick={() => {
                        setIsDropdownOpen(false)
                    }}
                >
                    <Close tw="h-4 w-4 md:(h-5 w-5)" />
                </button>
            </DropdownHeader>
            <DropdownBody>{children}</DropdownBody>
        </DropdownContainer>
    )
}

export default Dropdown
