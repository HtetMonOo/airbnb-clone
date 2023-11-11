import { Stack } from '@mui/material'
import { useState, useEffect } from 'react'

import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {
    const [ location, setLocation ] = useState('beach')
    const [ items, setItems ] = useState(null);

    useEffect(() => {
        fetchFromAPI(`search-location?location=${location}`)
            .then((data) => console.log(data.results))
    }, [location])
  return (
    <Stack direction='row' flexWrap='wrap' sx={{ px: 4, py: 2}}>

    </Stack>
  )
}

export default Feed