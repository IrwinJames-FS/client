import styled from "styled-components";
import { theme } from "./theme";

export const Application = styled.div`
	background-color: var(--vip-bg-1, #fff);
	color: var(--vip-fg, #000);
	width: 100vw;
	height: 100vh;
	overflow-y:scroll;

	main,header{
		padding: 0 1rem;
	}
	${theme}
`