import { Stack } from '@mui/material'
import { useState, useEffect } from 'react'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import HouseCard from './HouseCard'
import { house } from '../utils/constant'

const Feed = ({location}) => {
    const [ items, setItems ] = useState(house);

    // useEffect(() => {
    //     fetchFromAPI(`search-location?location=${location}`)
    //         .then((data) => setItems(data.results))
    // }, [])


  return (
    <Stack direction='row' flexWrap='wrap' sx={{ px: 4, py: 2, marginTop: '160px'}}>
        {
            items?.map((item) => <HouseCard item={item} />)
        }
    </Stack>
  )
}

export default Feed