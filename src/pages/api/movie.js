const apiKey = process.env.MOVIE_API_KEY;
const baseUrl = process.env.MOVIE_BASE_URL;

const listMovies = async (category) => {
  try {
    const response = await fetch(`${baseUrl}/${category}?api_key=${apiKey}`);

    return response.json();
  } catch (error) {
    return error.response;
  }
};

const getMovie = async (movieId) => {
	try	{
		const response = await fetch(`${baseUrl}/${movieId}?api_key=${apiKey}`);

    return response.json();
	} catch (error) {
		error.response;
	}
}

export { listMovies, getMovie };
