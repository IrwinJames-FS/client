import { Link } from "react-router-dom";
import { styled, css } from "styled-components";
import { cVar } from "./theme";

type RoundedLinkProps = {
	to?: string
	$radius?: string,
	$background?: string,
	$hoverBackgroundColor?: string,
	$color?: string,
	$height?: string,
	$width?: string,
	$padding?: string

}
export const RoundedLink = styled(Link)<RoundedLinkProps>`${({$radius, $background, $height, $width, $color=cVar('foreground-color', '#000'), $padding="0 0.5rem", $hoverBackgroundColor})=>css`
	appearance: none;
	display:inline-flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	color:${$color};
	padding: ${$padding};
	font-size: 1rem;
	border-radius: ${$radius ?? '0'};
	background-color: ${$background ?? 'none'};
	border:none;
	${$height && css`
		height: ${$height};
	`}
	${$width && css`
		width: ${$width};
	`}
	${$hoverBackgroundColor && css`
		&:hover{
			background-color: ${$hoverBackgroundColor};
		}
	`}
`}`;