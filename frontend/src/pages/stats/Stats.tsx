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

//local
import { StatsInterface } from './interfaces/stats'
import StatsBox from './components/StatsBox'
import { convertBytesToX } from '../../utils/utils'

const Stats = () => {
    // stats response state
    const [statsData, setStatsData] = useState<StatsInterface>({
        count: '',
        size: '',
        message: '',
    })

    // display all cache on first page load
    useEffect(() => {
        axios
            .get<StatsInterface>('/api/cache/meta')
            .then((res) => setStatsData(res.data))
    }, [])
    return (
        <Container>
            <ContainerHeader label="Stats" />
            <ContainerBody>
                <div tw="grid grid-cols-1 gap-8 md:(grid-cols-3 gap-12) lg:(gap-24)">
                    <StatsBox label="Number of Files" value={statsData.count} />
                    <StatsBox
                        label="Total File Size"
                        value={convertBytesToX(statsData.size)}
                    />
                    <StatsBox
                        label="Messages"
                        value={statsData.message ? statsData.message : '-'}
                    />
                </div>
            </ContainerBody>
        </Container>
    )
}

export default Stats
