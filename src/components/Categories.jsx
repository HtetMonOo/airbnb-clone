import { Stack, Button, Typography } from "@mui/material"

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  
  return (
    <Stack direction='row'
      sx={{
      overflowX: 'auto',
      overflowY: 'hidden',
      gap: 4,
      mr: 4
    }}>
      {categories?.length && categories.map((category) => (
        <Button 
          onClick={() => setSelectedCategory(category.title)}
          sx={{ 
            borderBottom: category.title === selectedCategory ? '1px solid black !important' : '1px solid white !important',
            color: category.title === selectedCategory ? 'black !important' : '#0000008a !important',
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
          <img src={category.imageUrl} alt='icon' width='25px' />
          <Typography variant='caption'>{category.title}</Typography>
        </Stack>
        </Button>
      ))}
    </Stack>
  )
}

export default Categories