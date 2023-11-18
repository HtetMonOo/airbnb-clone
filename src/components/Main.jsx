import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { fetchCategories } from "../utils/fetchFromAPI"

import Navbar from './Navbar'
import Menubar from './Menubar'
import Feed from './Feed'

const Main = () => {
  const [ selectedCat, setSelectedCat ] = useState('Cabins')
  const [ categories, setCategories ] = useState(null);

  // useEffect(() => {
  //   fetchCategories().then((data) => setCategories(data))
  // }, [selectedCat])
 
  return (
    <Box>
        <Navbar position='fixed' />
        <Menubar categories={categories} selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
        <Feed location={ selectedCat } />
    </Box>
  )
}

export default Main