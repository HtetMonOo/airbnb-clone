import { Stack, Button, Typography } from "@mui/material"
import { categories } from "../utils/constant"

const Menubar = () => {
  return (
    <Stack direction='row'
      sx={{
      overflowX: 'auto',
      overflowY: 'hidden',
      gap: 2,
      mx: 4
    }}>
      {categories.map((category) => (
        <Button sx={{ 
          borderBottom: '1px solid white',
          minWidth: 'auto',
          p: '6px 0',
          '&:hover': { 
            borderRadius: '0',
            backgroundColor: 'white',
            borderColor: '#c5c6d0',
            color: 'black !important'
          }}}>
        <Stack direction='column' alignItems='center' 
          sx={{ whiteSpace: 'nowrap'}}>
          {category.icon}
          <Typography variant='caption'>{category.name}</Typography>
        </Stack>
        </Button>
      ))}
    </Stack>
  )
}

export default Menubar