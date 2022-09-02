import 'twin.macro'
import 'styled-components/macro'

const StatsBox = ({ label, value }: { label: string; value: string }) => {
    return (
        <div tw="flex flex-col items-center justify-center shadow">
            <div tw="w-full text-center bg-blue-700 rounded-t-lg text-gray-100 p-2 md:(text-xl p-4)">
                {label}
            </div>
            <div tw="w-full h-full text-center text-6xl rounded-b-lg bg-white p-4 md:(text-7xl p-6)">
                {value}
            </div>
        </div>
    )
}

export default StatsBox
