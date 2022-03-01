import Head from 'next/head';
import styled from "styled-components";
import Link from 'next/link'
import Image from "next/image";

import backgroundImg from '../assets/background.webp';
import logoImg from '../assets/logo.webp';

const Layout = ({ children, pathname = null }) => {
	const categories = [
		{
			name:'Popular',
			path: 'popular',
		},
		{
			name: 'Now Playing',
			path: 'now_playing',
		},
		{
			name: 'Top rated',
			path: 'top_rated',
		},
		{
			name: 'Upcoming',
			path: 'upcoming',
		},
	];

	return (
		<>
		<Head>
			<link rel="icon" type="image/png" sizes="16x16" href='/favicon.ico' />
			<title>Movie Finder</title>
      <meta name="description" content='Find any movie you want' />
		</Head>
			<Wrapper>

				<Background>
					<Image
						src={backgroundImg}
						layout="fill"
						objectFit="cover"
						quality={100}
						alt="background movie-finder"
					/>
				</Background>

				<Logo>
					<Link passHref href="/popular">
						<a>
							<Image
								src={logoImg}
								quality={100}
								alt="logo movie-finder"
							/>
						</a>
					</Link>
				</Logo>

				{
					pathname && (
						<CategoryContainer>
							{
								categories.map((category) => (
									<Link passHref href={category.path} key={category.path}>
										<Category active={category.path === pathname}>
											{category.name}
										</Category>
									</Link>
								))
							}
						</CategoryContainer>
					)
				}

				<ContentWrapper>
					{children}
				</ContentWrapper>
			</Wrapper>
		</>
	)
};

export default Layout;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	color: white;
`;

const ContentWrapper = styled.div`
	width: 100%;
	max-width: 1440px;
	margin: 24px auto;
	padding: 0 48px;
	overflow-y: auto;
	/* width */
	::-webkit-scrollbar {
		width: 8px;
		border-radius: 4px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #b1afaf;
		border-radius: 4px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #ecc903;
		border-radius: 4px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
`;

const Background = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -1;
`;

const BaseContainer =  styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
`;

const Logo = styled(BaseContainer)``;

const CategoryContainer = styled(BaseContainer)`
	margin-top: 24px;
	flex-wrap: wrap;

	& > span:not(:first-child) {
		margin-left: 4px;
	}
`;

const Category = styled.span`
	margin-bottom: 8px;
	border: 1px solid slategray;
	border-radius: 4px;
	padding: 8px;
	text-align: center;
	cursor: pointer;
	transition: background 100ms ease-in-out;

	background: ${({ active }) => active && 'green' };

	:hover {
		background: green;
	}
`;
