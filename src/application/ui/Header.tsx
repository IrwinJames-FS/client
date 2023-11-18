import { ReactNode } from "react";
import styled from "styled-components";
import { Flex } from "./Flex";
import { cVar } from "./theme";


export type HeaderProps = {
	children?: ReactNode
}
export const Header = ({children}:HeaderProps) => (
<StyledHeader as="header"
	$direction={cVar('head-dir', 'column')}
	$justify={cVar('head-justify', 'start')}
	$align={cVar('head-align', 'stretch')}>
	{children}
</StyledHeader>);

export const StyledHeader = styled(Flex)`
	background-color: var(--vip-bg-2, #ccf);
	min-height: 3rem;
	box-shadow: 0px 2px 2px #000;
	margin-bottom: 0.5rem;
	h1{
		font-size: 1.5rem;
	}
`