import 'twin.macro'
import 'styled-components/macro'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import components
import Cache from './pages/cache/Cache'
import Stats from './pages/stats/Stats'
import Navbar from './components/Navbar'
import Settings from './pages/settings/Settings'

const App = () => {
    return (
        <BrowserRouter>
            <div tw="flex flex-col h-screen w-full">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Cache />} />
                    <Route path="/stats" element={<Stats />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
