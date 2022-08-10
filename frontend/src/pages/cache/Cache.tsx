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
import CacheTable from './components/Table'

// local components
import HeaderForm from './components/HeaderForm'

// interfaces
import { CacheInterface, CacheResponseInterface } from './interfaces/cache'

const Cache = () => {
    //  cache data is queried and set by the HeaderForm.
    //  cache data is used by the CacheTable.

    // cache response state
    const [cacheData, setCacheData] = useState<CacheInterface[]>([])

    // display all cache on first page load
    useEffect(() => {
        axios
            .get<CacheResponseInterface>('/api/cache')
            // add a 'isChecked' property to all rows in the cache
            // response from the server. The 'isChecked' property
            // is used for selecting the different cache files
            // in the table.
            .then((res) =>
                res.data.data.map((item) => ({ ...item, isChecked: false }))
            )
            // the response to cacheData state which is then used by
            // other components.
            .then((res) => setCacheData(res))
    }, [])

    return (
        <Container>
            <ContainerHeader>
                <HeaderForm setCacheData={setCacheData} />
            </ContainerHeader>
            <ContainerBody>
                <CacheTable cacheData={cacheData} setCacheData={setCacheData} />
            </ContainerBody>
        </Container>
    )
}

export default Cache
