import { Link } from "react-router-dom";
import { styled, css } from "styled-components";

type RoundedLinkProps = {
	to: string
	$radius?: string,
	$background?: string,
	$height?: string,
	$width?: string

}
export const RoundedLink = styled(Link)<RoundedLinkProps>`${({$radius, $background, $height, $width})=>css`
	${$radius && css`
		border-radius: ${$radius};
	`}
	${$background && css`
		background-color: ${$background};
	`}
	${$height && css`
		height: ${$height};
	`}
	${$width && css`
		width: ${$width};
	`}
`}`;