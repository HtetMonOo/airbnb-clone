import { Stack } from '@mui/material'
import { useState, useEffect } from 'react'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import HouseCard from './HouseCard'

const Feed = () => {
    const [ location, setLocation ] = useState('beach')
    const [ items, setItems ] = useState(null);

    useEffect(() => {
        fetchFromAPI(`search-location?location=${location}`)
            .then((data) => setItems(data.results))
    }, [location])

  return (
    <Stack direction='row' flexWrap='wrap' sx={{ px: 4, py: 2}}>
        {
            items?.map((item) => <HouseCard item={item} />)
        }
    </Stack>
  )
}

export default Feed