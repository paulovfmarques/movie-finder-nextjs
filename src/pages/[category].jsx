import Link from 'next/link';
import {
	Layout,
	MovieCard,
	MovieCardContainer,
} from '../components';
import { listMovies } from './api/movie';

export default function Popular({ movieArray, pathname }) {
  return (
		<Layout pathname={pathname}>
			<MovieCardContainer>
				{
					movieArray.map((movie) => (
						<Link passHref href={`/movie/${movie?.title}?id=${movie?.id}`} key={movie?.id}>
							<a>
								<MovieCard
									title={movie?.title}
									posterPath={movie?.poster_path}
									w={200}
									h={300}
								/>
							</a>
						</Link>
					))
				}
			</MovieCardContainer>
		</Layout>
	);
}


export async function getStaticPaths() {
	const paths = ['popular', 'now_playing', 'top_rated', 'upcoming'].map((path) => ({
		params: {
			category: path,
		},
	}))

	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const { results } = await listMovies(params?.category);

	return {
		props: {
			movieArray: results?.slice(0, 12), // limiting the amount of results rendered
			pathname: params?.category
		},
		revalidate: 60 * 60 * 4,
	};
}
