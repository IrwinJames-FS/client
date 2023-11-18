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
	color: var(--vip-fg);
	background-color: var(--vip-bg-4, #000);
	&:hover{
		background-color: var(--vip-bg-5);
	}
	&.primary{
		background-color: var(--vip-primary-1);
		&:hover{
			background-color: var(--vip-primary-3);
		}
	}
	&.dangerous{
		background-color: var(--vip-dangerous-1);
		&:hover{
			background-color: var(--vip-dangerous-2);
		}
	}
`
export const CircleLink = styled(Link)`
	${circlecss}
`;

export const CircleButton = styled.button`
	${circlecss}
`;