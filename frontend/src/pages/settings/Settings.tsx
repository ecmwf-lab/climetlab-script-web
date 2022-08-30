import 'twin.macro'
import 'styled-components/macro'

import axios from 'axios'
import { useEffect, useState } from 'react'

// global components
import {
    Container,
    ContainerHeader,
    ContainerBody,
} from './../../components/Containers'

//local components
import SettingsTable from './components/Table'
import {
    SettingsInterface,
    SettingsResponseInterface,
} from './interfaces/settings'

// main component
const Settings = () => {
    // settings response state
    const [settingsData, setSettingsData] = useState<SettingsInterface[]>([])

    // display all cache on first page load
    useEffect(() => {
        axios
            .get<SettingsResponseInterface>('/api/settings')
            .then((res) => setSettingsData(res.data.data))
    }, [])
    return (
        <Container>
            <ContainerHeader label="Settings" />
            <ContainerBody>
                <SettingsTable
                    settingsData={settingsData}
                    setSettingsData={setSettingsData}
                />
            </ContainerBody>
        </Container>
    )
}

export default Settings
