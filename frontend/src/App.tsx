import "twin.macro"
import 'styled-components/macro'
import { useState, useEffect } from "react";

const App = () => {
    const [data, setData] = useState("")

    useEffect(() => {
        fetch("/api").then(
            res => res.json()
        ).then(
            data => {
                setData(data.data)
            }
        )
    }, [])

  return (
    <div tw="flex flex-col items-center justify-center h-screen w-full">
        <p tw="bg-green-600 p-8 rounded text-gray-100 text-6xl font-bold">
            {data}
        </p>
    </div>
  );
}

export default App;
