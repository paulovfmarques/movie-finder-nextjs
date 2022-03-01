import styled from 'styled-components';
import { Layout, MovieCard } from '../../components';
import { getMovie } from '../api/movie';

const MoviePage = ({ poster_path, title,  overview, vote_average }) => {
	return (
		<Layout>
			<Container>
				<MovieCard
					title={title}
					posterPath={poster_path}
					w={350}
					h={500}
				/>
				<ContentWrapper>
					<div>
						<h1>{title}</h1>
						<p>{vote_average}</p>
					</div>
					<Backdrop />
					<div>
						<p>{overview}</p>
					</div>
				</ContentWrapper>
			</Container>
		</Layout>
	)
};

export async function getServerSideProps({ query }) {
	const { poster_path, title,  overview, vote_average } = await getMovie(query?.id);

	return {
		props: {
			poster_path,
			title,
			overview,
			vote_average,
		}
	};
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	padding: 0 5vw;
	margin-top: 48px;
`;

const Backdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: gray;
	opacity: 0.1;
	filter: blur(4px)
`;

const ContentWrapper = styled.div`
	position: relative;
	padding: 24px;
	width: 100%;

	h1 {
		color: #dfca08;
		font-size: 2rem
	}

	& > :first-child {
		display: flex;
		justify-content: space-between;
		margin-bottom: 8px;

		p {
			height: 2.8rem;
			width: 2.8rem;
			border-radius: 1.4rem;
			border: 2px solid white;
			font-size: 1.25rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	& > :last-child p {
		line-height: 24px;
	}
`;

export default MoviePage;
