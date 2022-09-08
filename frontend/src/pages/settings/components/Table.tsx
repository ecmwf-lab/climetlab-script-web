import { TextInput } from '../../../components/Inputs'
import { Td, Th, Tr, Subtext, Table } from './../../../components/Table'

import { SettingsInterface } from './../interfaces/settings'

// settings table header columns
const SettingsTableHeader = () => {
    return (
        <Tr>
            <Th>Name</Th>
            <Th>
                Value <Subtext>(editable)</Subtext>
            </Th>
            {/* <Th>Description</Th> */}
        </Tr>
    )
}

// settings table body rows
const SettingsTableBody = ({
    settingsData,
    setSettingsData,
    isEditMode,
}: {
    settingsData: SettingsInterface[]
    setSettingsData: React.Dispatch<React.SetStateAction<SettingsInterface[]>>
    isEditMode: boolean
}) => {
    return (
        <>
            {settingsData.map((row) => (
                <Tr key={Object.keys(row)[0]}>
                    <Td>{Object.keys(row)}</Td>
                    {isEditMode ? (
                        <Td>
                            <TextInput
                                inputName={Object.values(row)}
                                state={Object.values(row)}
                            />
                        </Td>
                    ) : (
                        <Td>{Object.values(row)}</Td>
                    )}
                </Tr>
            ))}
        </>
    )
}

// settings table uses the global <Table /> component.
const SettingsTable = ({
    settingsData,
    setSettingsData,
    isEditMode,
}: {
    settingsData: SettingsInterface[]
    setSettingsData: React.Dispatch<React.SetStateAction<SettingsInterface[]>>
    isEditMode: boolean
}) => {
    return (
        <form>
            <Table
                header={<SettingsTableHeader />}
                body={
                    <SettingsTableBody
                        settingsData={settingsData}
                        setSettingsData={setSettingsData}
                        isEditMode={isEditMode}
                    />
                }
            />
        </form>
    )
}

export default SettingsTable
