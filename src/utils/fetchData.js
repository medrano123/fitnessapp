export const exerciseOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
	  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
  };

export const fetchData = async (url, options) => {
	const response = await fetch(url, options)
	const data = await response.json()

	return data;
}

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '37a04fd480msh0eeda5200de6e8ap18d79djsne7bc4f851ef5',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	  }
};