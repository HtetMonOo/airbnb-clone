import { Paper, IconButton, Icon } from '@mui/material'
import { useState } from 'react'

const Searchbar = () => {
    const [ searchTerm, setSearchTerm] = useState('')
  return (
    <Paper
        className='btn-container'
        component='form'
        onSubmit={()=>{}}
        elevation={1}
    >
        <input 
            placeholder='Search...'
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            style={{ border: 'none', outline: 'none', width: '200px'}}
        />
        <IconButton sx={{ backgroundColor: '#ff5a5f', fontSize: '20px',
            '&:hover': {
                backgroundColor: '#ff5a5f'
            }}} >
            <Icon>search</Icon>
        </IconButton>
    </Paper>
  )
}

export default Searchbar