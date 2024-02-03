import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	body {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
	font-family: 'Roboto', sans-serif;
	font-style: normal;
	font-weight: 400;
  margin: 0;
  background-color: ${(props) => props.theme.PrimaryWhite};
  color: ${(props) => props.theme.PrimaryBlack};
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin-top: 0;
		margin-bottom: 0;
	}

	a {
  text-decoration: none;
}

	ul, ol {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	img {
		display: block;
		max-width: 100%;
		height: auto;
	}

	input,
	button,
	label {
		display: block;
	}

	button {
  cursor: pointer;
	padding: 0;

	svg {
		display: block;
		margin: 0;
		padding: 0;
	}
}
`;
