import React from 'react';
import { Box, Stack, Typography, Button} from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px'},
            ml: { sm: '50px'}
        }} position='relative' p="20px ">
            <Typography color="#FF2625" fontWeight= "600" fontSize= "26px">
                Giovanni's <br/> Fitness Club
            </Typography>
            <Typography fontWeight={700}
            sx={{ fontSize: {lg: '44px', sx: '40px'}}}
            mb="23px" mt="30px"
            >
                Sweat, Work, <br/> Repeat
            </Typography>
            <Typography fontSize="22px"
            lineHeight="35px" mb={4}
            >
                Check out these effective exercises 
            </Typography>
            <Button variant="contained" color="error"  href="#exercises" sx = {{ backgroundColor: "#FF2625", padding: "10px"}}>
                Explore exercises
            </Button>
            <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
                Exercise
            </Typography> 
            <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img"/>
            {/*style ={{ position: "absolute", right: "40px" , top: "0px",width: "700px", height: "900px",   marginTop: "-310px"}}*/}
        </Box>
    )
}
 
export default HeroBanner