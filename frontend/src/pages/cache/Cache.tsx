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
import { HeaderTitle } from './../../components/Text'
import { CacheTable } from './../../components/Tables'

// local components
import HeaderForm from './components/HeaderForm'

// interfaces
import {
    CacheInterface,
    CacheResponseInterface,
} from './../../interfaces/cache'

const Cache = () => {
    // cache response
    const [cacheData, setCacheData] = useState<CacheInterface[]>([])

    // display all cache on first page load
    useEffect(() => {
        axios
            .get<CacheResponseInterface>('/api/cache')
            .then((res) => setCacheData(res.data.data))
    }, [])

    return (
        <Container>
            <ContainerHeader>
                <HeaderTitle>Cache</HeaderTitle>
                <HeaderForm setCacheData={setCacheData} />
            </ContainerHeader>
            <ContainerBody>
                <CacheTable cacheData={cacheData} />
            </ContainerBody>
        </Container>
    )
}

export default Cache
