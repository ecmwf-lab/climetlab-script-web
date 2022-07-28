import tw from 'twin.macro'
import 'styled-components/macro'
import { useState } from 'react'

import Dropdown from './Dropdowns'
import { CheckboxInput } from './Inputs'
import { CacheInterface } from './../interfaces/cache'

import { isObject, sliceForDisplay } from './../utils/utils'

const Th = tw.th`px-2 py-4 text-base md:(text-lg px-4 py-6)`
const Tr = tw.tr`border-b border-blue-200`
const Td = tw.td`px-2 py-2 text-base md:(text-lg px-4 py-4)`
const Subtext = tw.span`font-normal text-gray-500 text-sm md:text-base`

const JsonArgs = ({
    cacheArgs,
}: {
    cacheArgs: { parts: string | null; url: string }
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            {isOpen ? (
                <>
                    <div onClick={() => setIsOpen(!isOpen)}>
                        {sliceForDisplay(JSON.stringify(cacheArgs))}
                    </div>
                    <Dropdown
                        usedFor="table"
                        headerLabel="Expanded Argument"
                        setIsDropdownOpen={setIsOpen}
                    >
                        {/* pretty print logic for if cacheArgs is an array  */}
                        {Array.isArray(cacheArgs) && (
                            <div tw="flex flex-col">
                                {cacheArgs.map((item) => (
                                    <span key={item}>{item},</span>
                                ))}
                            </div>
                        )}
                        {/* pretty print logic for if cacheArgs is an object  */}
                        {isObject(cacheArgs) && (
                            <div>
                                {<span>{JSON.stringify(cacheArgs)}</span>}
                            </div>
                        )}
                    </Dropdown>
                </>
            ) : (
                <div onClick={() => setIsOpen(!isOpen)}>
                    {sliceForDisplay(JSON.stringify(cacheArgs))}
                </div>
            )}
        </>
    )
}

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
                    <Th>
                        Size{' '}
                        <Subtext tw="text-gray-500 text-sm md:text-base">
                            (bytes)
                        </Subtext>
                    </Th>
                    <Th>
                        Date{' '}
                        <Subtext tw="text-gray-500 text-sm md:text-base">
                            (y-m-d h:m:s)
                        </Subtext>
                    </Th>
                    <Th>Owner</Th>
                    <Th>Argument</Th>
                </Tr>
            </thead>
            <tbody tw="overflow-y-auto">
                {cacheData.map((obj) => (
                    <Tr key={obj.path}>
                        {/* check box */}
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
                        <Td>{obj.creation_date.split('.')[0]}</Td>
                        <Td>{obj.owner}</Td>
                        <Td tw="relative">
                            <JsonArgs cacheArgs={obj.args} />
                        </Td>
                    </Tr>
                ))}
            </tbody>
        </table>
    )
}
