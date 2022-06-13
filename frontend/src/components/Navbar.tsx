import 'twin.macro'
import 'styled-components/macro'

const Navbar = () => {
    return (
        <nav tw="w-full bg-blue-700 text-gray-100">
            <ul tw="flex flex-row justify-between px-4 py-2">
                <li>logo</li>
                <div tw="flex flex-row space-x-4">
                    <li>Cache</li>
                    <li>Settings</li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
