import 'twin.macro'
import 'styled-components/macro'

// import components
import Navbar from './components/Navbar'
import Cache from './pages/Cache'

const App = () => {
    return (
        <div tw="flex flex-col h-screen w-full">
            <Navbar />
            <Cache />
        </div>
    )
}

export default App
