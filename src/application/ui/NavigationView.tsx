import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const NavigationView = () => {
	
	return (<StyledNavigationView $child={["/vehicles", "/manufacturers"].indexOf(window.location.pathname) + 1}>
		<Link to="/vehicles">Vehicles</Link>
		<Link to="/manufacturers">Manufacturers</Link>
	</StyledNavigationView>);
}

type StyledNavigationViewProps = {
	$child: number
};
const StyledNavigationView = styled.nav<StyledNavigationViewProps>`${({$child}) => css`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr;
	align-items: stretch;
	justify-items: stretch;
	height: 2rem;
	border-radius: 1rem;
	overflow: hidden;
	background-color: var(--vip-bg-1);

	a{
		text-decoration: none;
		text-align: center;
		padding: 0 0.5rem;
		line-height: 2rem;
		color: var(--vip-fg, #000);
		
		&:hover{
			background: var(--vip-bg-4, #000);
		}

		&:nth-child(${$child}):not(:hover){
			background-color: var(--vip-bg-5, #000);
		}
	}
`}`;