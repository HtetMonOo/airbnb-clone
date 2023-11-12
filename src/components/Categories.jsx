import { Stack, Button, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { fetchCategories } from "../utils/fetchFromAPI"

const Categories = () => {
  const [ categories, setCategories ] = useState(null);

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data))
  }, [])
  
  return (
    <Stack direction='row'
      sx={{
      overflowX: 'auto',
      overflowY: 'hidden',
      gap: 4,
      mr: 4
    }}>
      {categories?.length && categories.map((category) => (
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
        <Stack direction='column' alignItems='center' gap={1}
          sx={{ whiteSpace: 'nowrap'}}>
          <img src={category.image} alt='icon' width='25px' />
          <Typography variant='caption'>{category.title}</Typography>
        </Stack>
        </Button>
      ))}
    </Stack>
  )
}

export default Categories