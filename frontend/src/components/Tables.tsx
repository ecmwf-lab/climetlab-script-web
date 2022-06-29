import tw from 'twin.macro'
import 'styled-components/macro'
import { CheckboxInput } from './Inputs'
import { CacheInterface } from './../pages/Cache'

const Th = tw.th`px-2 py-4 text-base md:(text-lg px-4 py-6)`
const Tr = tw.tr`border-b border-blue-200`
const Td = tw.td`px-2 py-2 text-base md:(text-lg px-4 py-4)`

export const CacheTable = ({ cacheData }: { cacheData: CacheInterface[] }) => {
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
                {cacheData.map((obj) => (
                    <Tr>
                        <Th>
                            <CheckboxInput inputName="checkbox" />
                        </Th>
                        {/* file name */}
                        <Td>
                            {
                                obj.path
                                    .split('/')
                                    [obj.path.split('/').length - 1].split(
                                        '.'
                                    )[0]
                            }
                        </Td>
                        {/* file type */}
                        <Td>
                            {
                                obj.path
                                    .split('/')
                                    [obj.path.split('/').length - 1].split(
                                        '.'
                                    )[1]
                            }
                        </Td>
                        <Td>{obj.size}</Td>
                        <Td>{obj.creation_date}</Td>
                        <Td>Top Secret Satellite</Td>
                        <Td>{obj.owner}</Td>
                        <Td>{JSON.stringify(obj.args)}</Td>
                    </Tr>
                ))}
            </tbody>
        </table>
    )
}
