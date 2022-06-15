import 'twin.macro'
import 'styled-components/macro'
import { useState, useEffect } from 'react'

// import components
import Navbar from './components/Navbar'
import PageCache from './components/PageCache'

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
            <PageCache />
        </div>
    )
}

export default App
