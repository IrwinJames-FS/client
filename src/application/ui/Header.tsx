import styled from "styled-components";

export const Header = styled.header`
	display: flex;
	flex-direction: var(--vip-header-direction, column);
	flex-wrap: nowrap;
	background-color: var(--vip-primary-background-color, #ccf);
	justify-content: var(--vip-header-justify, start);
	align-items: var(--vip-header-align, stretch);
	min-height: 3rem;
`