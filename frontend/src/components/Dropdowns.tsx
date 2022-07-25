import tw from 'twin.macro'
import 'styled-components/macro'
import useClickOutside from '../hooks/useClickOutside'

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
                    tw="self-end mb-2"
                    onClick={() => {
                        setIsDropdownOpen(false)
                    }}
                >
                    x
                </button>
                <DropdownBody>{children}</DropdownBody>
            </DropdownLayout>
        </DropdownContainer>
    )
}
