import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
  	return (
		<Box sx={{ mt: { lg: '100px', xs: '0'}}}>
			<Typography mb="33px" variant="h3">Exercises that target the same muscle group</Typography>
			<Stack direction="row" mb={5} sx={{ p: '2', position: 'relative'}}>
				{targetMuscleExercises.length ? <HorizontalScrollBar data= {targetMuscleExercises} />
				: <Loader />}

			</Stack>

			<Typography mb="33px" variant="h3">Exercises that use the same equipment</Typography>
			<Stack direction="row" mb={5} sx={{ p: '2', position: 'relative'}}>
				{equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises} />
				: <Loader />}

			</Stack>
		</Box>
	)
}

export default SimilarExercises