import { Stack, Button, Icon, Box } from "@mui/material"

import Categories from './Categories'

const Menubar = () => {
  return (
    <Stack direction='row' height='50px' alignItems='center' sx={{ px: 4, py: 2}}>
      <Categories />
      <Stack direction='row' gap={2} sx={{ width: 'max-content'}}>
        <Button className='square-btn' variant='outlined' startIcon={<Icon>tune</Icon>} >
          Filter
        </Button>
        <Button className='square-btn' variant='outlined' endIcon={<Icon>radio_button_checked</Icon>}>
          Display total before taxes
        </Button>
      </Stack>
    </Stack>
  )
}

export default Menubar