import 'twin.macro'
import 'styled-components/macro'

const Navbar = () => {
    return (
        <nav tw="w-full bg-blue-700 text-gray-100">
            <ul tw="flex flex-row justify-between px-4 py-2 sm:(px-6 py-4) md:(px-8 py-6) lg:(px-10 py-8)">
                <li>logo</li>
                <div tw="flex flex-row text-base space-x-4 sm:(text-lg space-x-6) md:(text-xl space-x-8)">
                    <li>Cache</li>
                    <li>Settings</li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
