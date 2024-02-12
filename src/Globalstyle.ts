import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import InterRegular from "./fonts/Inter-Regular.ttf";
import InterMedium from "./fonts/Inter-Medium.ttf";
import InterSemiBold from "./fonts/Inter-SemiBold.ttf";
import InterBold from "./fonts/Inter-Bold.ttf";

export function fontFace(name: string, src: string, fontWeight = 400, fontStyle = "normal") {
  return `
      @font-face{
          font-family: ${name};
          src: url(${src}) format("truetype");
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `;
}

export const GlobalStyle = createGlobalStyle`
	${fontFace("InterRegular", InterRegular)}
	${fontFace("InterMedium", InterMedium, 500)}
	${fontFace("InterSemiBold", InterSemiBold, 600)}
	${fontFace("InterBold", InterBold, 700)}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	body {
  font-family: 'InterRegular';
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
