import styled from "styled-components";
import { theme } from "./theme";

export const Application = styled.div`
	background-color: var(--vip-background-color, #fff);
	color: var(--vip-foreground-color, #000);
	width: 100vw;
	height: 100vh;
	${theme}
`