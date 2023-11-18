import { Link } from "react-router-dom";
import { styled, css } from "styled-components";
import { cVar } from "./theme";
import { ComponentPropsWithoutRef } from "react";

type RoundedProps = {
	$radius?: string,
	$background?: string,
	$hoverBackgroundColor?: string,
	$color?: string,
	$height?: string,
	$width?: string,
	$padding?: string,
	$direction?: string
	$gap?: string
}
type RoundedLinkProps = {
	to?: string
} & RoundedProps
export const RoundedLink = styled(Link)<RoundedLinkProps>`${({$radius, $background = 'var(--vip-bg-2)', $height, $width, $color=cVar('fg', '#000'), $padding="0 0.5rem", $hoverBackgroundColor, $direction = 'column'})=>css`
	appearance: none;
	display:inline-flex;
	flex-flow: ${$direction} nowrap;
	justify-content: center;
	align-items: center;
	color:${$color};
	padding: ${$padding};
	font-size: 1rem;
	border-radius: ${$radius ?? '0'};
	background-color: ${$background};
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

export type RoundedButtonProps = ComponentPropsWithoutRef<"button"> & RoundedProps

export const RoundedButton = styled.button<RoundedButtonProps>`${({$radius, $background = 'var(--vip-bg-2)', $height, $width, $color=cVar('fg'), $padding="0 0.5rem", $hoverBackgroundColor, $direction = 'column', $gap = '0'})=>css`
	appearance: none;
	display:inline-flex;
	flex-flow: ${$direction} nowrap;
	justify-content: center;
	align-items: center;
	gap: ${$gap};
	color:${$color};
	padding: ${$padding};
	font-size: 1rem;
	border-radius: ${$radius ?? '0'};
	background-color: ${$background};
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