import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo.png';
import Logo1 from '../assets/images/Logo-1.png';


const Footer = () => {
  	return (
		<Box mt="80px" bgcolor="#fff3f4">
			<Stack gap="40px" alignItems='center' px="40px" pt="24px">
				<img src={Logo1} alt="logo" width="200px" height="40px"/>
				<Typography pb="40px" variant="h5" mt="20px">
					Created by Giovanni 
				</Typography>
			</Stack>
		</Box>
  	)
}

export default Footer