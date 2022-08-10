import tw from 'twin.macro'
import 'styled-components/macro'

export const Tr = tw.tr`border-b border-blue-200`
export const Th = tw.th`px-2 py-4 text-base md:(text-lg px-4 py-6)`
export const Td = tw.td`px-2 py-2 text-base md:(text-lg px-4 py-4)`
export const Subtext = tw.span`font-normal text-gray-500 text-sm md:text-base`

const TableContainer = tw.table`w-full whitespace-nowrap table-auto`
const TableHeader = tw.thead`text-left font-semibold`
const TableBody = tw.tbody`overflow-y-auto`

export const Table = ({
    header,
    body,
}: {
    header: React.ReactNode
    body: React.ReactNode
}) => {
    return (
        <TableContainer>
            <TableHeader>{header}</TableHeader>
            <TableBody>{body}</TableBody>
        </TableContainer>
    )
}
