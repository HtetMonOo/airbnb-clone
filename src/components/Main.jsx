import { Box } from '@mui/material'

import Navbar from './Navbar'
import Menubar from './Menubar'
import Feed from './Feed'

const Main = () => {
  return (
    <Box>
        <Navbar />
        <Menubar />
        <Feed />
    </Box>
  )
}

export default Main