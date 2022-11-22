import React, { useState } from 'react';
import { Box } from '@mui/system';

import { Exercises, SearchExercises, HeroBanner } from '../components';

const Home = () => {
	const [exercises, setExercises] = useState([]);
	const [bodyPart, setBodyPart] = useState('all')
	console.log(bodyPart)

	return (
		<Box>
			<HeroBanner />
			<SearchExercises setExercises={setExercises} setBodyPart={setBodyPart} bodyPart={bodyPart} />
			<Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
    	</Box>
  	)
}

export default Home