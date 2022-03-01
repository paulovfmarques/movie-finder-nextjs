import styled from "styled-components";

const MovieCardContainer = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 24px;
	width: 100%;
	flex-wrap: wrap;
	gap: 12px;

	/* & > a:not(:last-child) {
		margin-right: 12px !important; // using 'important' because the Image component overrides the styles with some default ones.
	} */

	& > a {
		max-height: 300px;
		cursor: pointer;
		margin-bottom: 16px !important;
		box-shadow: 1px 1px 5px -1px #ff0000bd;
	}

	& img, & span, & a {
		border-radius: 8px;
	}
`;

export default MovieCardContainer;