import tw from 'twin.macro'
import 'styled-components/macro'
import { CheckboxInput } from './Inputs'

const Th = tw.th`px-2 py-4 text-base md:(text-lg px-4 py-6)`
const Tr = tw.tr`border-b border-blue-200`
const Td = tw.td`px-2 py-2 text-base md:(text-lg px-4 py-4)`

export const CacheTable = () => {
    return (
        <table tw="w-full whitespace-nowrap table-auto">
            <thead tw="text-left font-semibold">
                <Tr>
                    <Th>
                        <CheckboxInput inputName="checkbox" />
                    </Th>
                    <Th>Name</Th>
                    <Th>Filetype</Th>
                    <Th>Size</Th>
                    <Th>Date</Th>
                    <Th>Source</Th>
                    <Th>Owner</Th>
                    <Th>Argument</Th>
                </Tr>
            </thead>
            <tbody>
                <Tr>
                    <Th>
                        <CheckboxInput inputName="checkbox" />
                    </Th>
                    <Td>Hurricane-kjsadhfdlk0as-jhfkjsdhf-lhjsdfkjshdf</Td>
                    <Td>GRIB</Td>
                    <Td>1000000000</Td>
                    <Td>22-06-2022</Td>
                    <Td>Top Secret Satellite</Td>
                    <Td>Space Org</Td>
                    <Td>witty water</Td>
                </Tr>
                <Tr>
                    <Th>
                        <CheckboxInput inputName="checkbox" />
                    </Th>
                    <Td>Hurricane-kjsadhfdlk0as-jhfkjsdhf-lhjsdfkjshdf</Td>
                    <Td>GRIB</Td>
                    <Td>1000000000</Td>
                    <Td>22-06-2022</Td>
                    <Td>Top Secret Satellite</Td>
                    <Td>Space Org</Td>
                    <Td>witty water</Td>
                </Tr>
                <Tr>
                    <Th>
                        <CheckboxInput inputName="checkbox" />
                    </Th>
                    <Td>Hurricane-kjsadhfdlk0as-jhfkjsdhf-lhjsdfkjshdf</Td>
                    <Td>GRIB</Td>
                    <Td>1000000000</Td>
                    <Td>22-06-2022</Td>
                    <Td>Top Secret Satellite</Td>
                    <Td>Space Org</Td>
                    <Td>witty water</Td>
                </Tr>
            </tbody>
        </table>
    )
}
