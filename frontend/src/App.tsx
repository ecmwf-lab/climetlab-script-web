import 'twin.macro'
import 'styled-components/macro'
import { useState, useEffect } from 'react'

// import components
import Navbar from './components/Navbar'
import Main from './components/Main'

const App = () => {
    const [data, setData] = useState('')

    useEffect(() => {
        fetch('/api')
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [])

    return (
        <div tw="flex flex-col h-screen w-full">
            <Navbar />
            <Main />
        </div>
    )
}

export default App
