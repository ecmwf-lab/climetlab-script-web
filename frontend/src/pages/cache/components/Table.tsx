import 'twin.macro'
import 'styled-components/macro'
import { useState } from 'react'

// global
import { DeleteButton } from './../../../components/Buttons'
import Dropdown from './../../../components/Dropdown'
import { CheckboxInput } from './../../../components/Inputs'

// local
import { CacheInterface } from './../interfaces/cache'

import { isObject, sliceForDisplay } from './../../../utils/utils'
import { Td, Th, Tr, Subtext, Table } from './../../../components/Table'

// component used inside the table body to create dropdown for args column
const JsonArgs = ({
    cacheArgs,
}: {
    cacheArgs: { parts: string | null; url: string }
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            {isOpen ? (
                <div>
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
                </div>
            ) : (
                <div onClick={() => setIsOpen(!isOpen)}>
                    {sliceForDisplay(JSON.stringify(cacheArgs))}
                </div>
            )}
        </>
    )
}

// cache table header columns
const CacheTableHeader = ({
    cacheData,
    setCacheData,
}: {
    cacheData: CacheInterface[]
    setCacheData: React.Dispatch<React.SetStateAction<CacheInterface[]>>
}) => {
    return (
        <>
            <Tr>
                <Th>
                    {/* !! add inputValue when implementing the checkbox functionality*/}
                    <CheckboxInput
                        inputName="selectAllCheckbox"
                        // check the 'selectAll' checkbox only if all checkboxes are selected.
                        isChecked={
                            false ||
                            cacheData.filter((row) => row?.isChecked !== true)
                                .length < 1
                        }
                        state={cacheData}
                        setState={setCacheData}
                    />
                </Th>
                <Th>Name</Th>
                <Th>Filetype</Th>
                <Th>
                    Size <Subtext>(bytes)</Subtext>
                </Th>
                <Th>
                    Date <Subtext>(y-m-d h:m:s)</Subtext>
                </Th>
                <Th>Owner</Th>
                <Th>Argument</Th>
            </Tr>
        </>
    )
}

// cache table body rows
const CacheTableBody = ({
    cacheData,
    setCacheData,
}: {
    cacheData: CacheInterface[]
    setCacheData: React.Dispatch<React.SetStateAction<CacheInterface[]>>
}) => {
    return (
        <>
            {cacheData.map((obj) => (
                <Tr key={obj.path}>
                    {/* check box */}
                    <Th>
                        <CheckboxInput
                            inputName={obj.path}
                            isChecked={obj.isChecked || false}
                            state={cacheData}
                            setState={setCacheData}
                        />
                    </Th>
                    {/* file name */}
                    <Td>
                        {
                            obj.path
                                .split('/')
                                [obj.path.split('/').length - 1].split('.')[0]
                        }
                    </Td>
                    {/* file type */}
                    <Td>
                        {
                            obj.path
                                .split('/')
                                [obj.path.split('/').length - 1].split('.')[1]
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
        </>
    )
}

// cache table uses the global <Table /> component.
const CacheTable = ({
    cacheData,
    setCacheData,
}: {
    cacheData: CacheInterface[]
    setCacheData: React.Dispatch<React.SetStateAction<CacheInterface[]>>
}) => {
    return (
        <div>
            {cacheData.filter((row) => row?.isChecked === true).length > 0 ? (
                <DeleteButton> Delete </DeleteButton>
            ) : (
                <DeleteButton tw="invisible">Delete</DeleteButton>
            )}
            <Table
                header={
                    <CacheTableHeader
                        cacheData={cacheData}
                        setCacheData={setCacheData}
                    />
                }
                body={
                    <CacheTableBody
                        cacheData={cacheData}
                        setCacheData={setCacheData}
                    />
                }
            />
        </div>
    )
}

export default CacheTable
