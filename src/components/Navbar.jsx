import { Stack, Box, Link, Button, IconButton, Icon } from '@mui/material'

import Searchbar from './Searchbar'

const Navbar = ({position}) => {
  return (
    <Stack 
        direction='row' 
        height='80px'
        width= '100%'
        justifyContent='space-between'
        alignItems='center' 
        sx={{ px: 4, py: 2, borderBottom: '1px solid #c5c6d0', position: {position}, top: 0, boxSizing: 'border-box', zIndex: 1, backgroundColor: 'white'}}
    >
        <Link to='/'>
            <img src='data:image/png;base64,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' alt="logo" width='120px'></img>
        </Link>
        <Searchbar />
        <Box>
            <Button
                
                sx={{
                    py: '7px',
                    borderRadius: '30px',
                    '&:hover': {
                        backgroundColor: 'rgb(247, 247, 247)'
                    }
                }}
            >Airbnb your home</Button>
            <IconButton>
                <Icon sx={{ fontSize: '20px' }}>language</Icon>
            </IconButton>
            <IconButton className='btn-container'>
                <Icon sx={{ fontSize: '20px', padding: '5px' }}>menu</Icon>
                <Icon sx={{ fontSize: '30px'}}>account_circle</Icon>
            </IconButton>
        </Box>
    </Stack>
  )
}

export default Navbar