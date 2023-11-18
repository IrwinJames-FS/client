import { Link } from "react-router-dom";
import { styled, css } from "styled-components";

const circlecss = css`
	appearance: none;
	display: inline-flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	width: 2rem;
	height: 2rem;
	border-radius: 1rem;
	border:none;
	color: var(--vip-foreground-color);
	background-color: var(--vip-navigation-active-overlay, #000);
	&:hover{
		background-color: var(--vip-navigation-hover-overlay);
	}
	&.primary{
		background-color: var(--vip-primary-background-color);
	}
`
export const CircleLink = styled(Link)`
	${circlecss}
`;

export const CircleButton = styled.button`
	${circlecss}
`;