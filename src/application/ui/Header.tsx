import { ReactNode } from "react";
import styled from "styled-components";
import { Flex } from "./Flex";
import { cVar } from "./theme";


export type HeaderProps = {
	children?: ReactNode
}
export const Header = ({children}:HeaderProps) => (
<StyledHeader as="header"
	$direction={cVar('header-direction', 'column')}
	$justify={cVar('header-justify', 'start')}
	$align={cVar('header-align', 'stretch')}>
	{children}
</StyledHeader>);

export const StyledHeader = styled(Flex)`
	background-color: var(--vip-primary-background-color, #ccf);
	min-height: 3rem;
	box-shadow: 0px 0px 8px var(--vip-header-shadow-color, #000);
	margin-bottom: 0.5rem;
	h1{
		font-size: 1.5rem;
	}
`