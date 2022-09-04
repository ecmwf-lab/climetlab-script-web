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
}: {
    settingsData: SettingsInterface[]
    setSettingsData: React.Dispatch<React.SetStateAction<SettingsInterface[]>>
}) => {
    return (
        <>
            {settingsData.map((row) => (
                <Tr key={Object.keys(row)[0]}>
                    <Td>{Object.keys(row)}</Td>
                    <Td>{Object.values(row)}</Td>
                </Tr>
            ))}
        </>
    )
}

// settings table uses the global <Table /> component.
const SettingsTable = ({
    settingsData,
    setSettingsData,
}: {
    settingsData: SettingsInterface[]
    setSettingsData: React.Dispatch<React.SetStateAction<SettingsInterface[]>>
}) => {
    return (
        <form>
            <Table
                header={<SettingsTableHeader />}
                body={
                    <SettingsTableBody
                        settingsData={settingsData}
                        setSettingsData={setSettingsData}
                    />
                }
            />
        </form>
    )
}

export default SettingsTable
