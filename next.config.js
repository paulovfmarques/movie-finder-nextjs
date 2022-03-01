/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	async redirects() {
    return [
      {
        source: '/',
        destination: '/popular',
        permanent: true,
      },
    ]
  },
	images: {
		domains: ['image.tmdb.org'],
	},
	env: {
    MOVIE_API_KEY: 'a812c59a82cad3e48ec7b77bf89efdb1',
		MOVIE_BASE_URL: 'https://api.themoviedb.org/3/movie',
		MOVIE_POSTER_URL: 'https://image.tmdb.org/t/p/w',
  },
};

module.exports = nextConfig;
