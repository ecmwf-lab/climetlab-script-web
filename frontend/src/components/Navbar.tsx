import 'twin.macro'
import 'styled-components/macro'
import { Link } from 'react-router-dom'

// import logo
import logo from './../assets/logo.png'

const Navbar = () => {
    return (
        <nav tw="w-full bg-blue-700 text-gray-100">
            <ul tw="flex flex-row justify-between items-center px-4 py-2 sm:(px-6 py-4) md:(px-8 py-6) lg:(px-10 py-8)">
                <li>
                    <img
                        tw="bg-gray-100 p-2 rounded-2xl h-12 md:h-16"
                        src={logo}
                        alt="logo"
                    />
                </li>
                <div tw="flex flex-row text-base space-x-4 sm:(text-lg space-x-6) md:(text-xl space-x-8)">
                    <li>
                        <Link to="/">Cache</Link>
                    </li>
                    <li>
                        <Link to="stats">Stats</Link>
                    </li>
                    <li>
                        <Link to="settings/">Settings</Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
