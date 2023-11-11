import { Box, Stack, Card, CardMedia, CardContent, Typography, Icon } from "@mui/material"

const HouseCard = ({ item: { id, address, images, type, rating, price: { priceItems }}}) => {
  return (
    <Box sx={{ width: '25%' }}>
        <Card sx={{ boxShadow: 'none', padding: 3}}>
            <CardMedia
                sx={{ height: '0', paddingBottom: '100%', borderRadius: '10px', cursor: 'pointer' }}
                image={images[0]}
            />
            <CardContent sx={{ padding: 0, paddingTop: 2, cursor: 'pointer'}}>
                <Stack direction='row' gap={1} alignItems='start'>
                    <Typography gutterBottom variant="body2" fontWeight='bold' component="div">
                    { address }
                    </Typography>
                    <Typography display='flex' gutterBottom variant="body2" fontWeight='bold' component="div">
                        <Icon sx={{ fontSize: '18px' }}>star</Icon>{ rating }
                    </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                { type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                { priceItems[0]?.title}
                </Typography>
                
            </CardContent>
        </Card>
    </Box>
  )
}

export default HouseCard