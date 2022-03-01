import Image from "next/image";
import getFallbackImage from './helper';

const posterBaseUrl = process.env.MOVIE_POSTER_URL;

const MovieCard = ({ posterPath, title, w, h }) => {
	return (
		<Image
			alt={title}
			src={posterBaseUrl + posterPath}
			placeholder="blur"
			blurDataURL={`data:image/svg+xml;base64,${getFallbackImage(w, h)}`}
			quality={100}
			width={w}
			height={h}
		/>
	);
}

export default MovieCard;