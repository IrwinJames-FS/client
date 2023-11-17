import { styled, css } from "styled-components";

/**
 * Flex props these may be necessary if another dynamic component implements Flex and offers flex properties.
 */
export type FlexProps = {
	$display?: string
	$direction?: string,
	$wrap?: string,
	$justify?: string,
	$align?: string,
	$gap?: string
};

/**
 * A generic flex element that can be modified on the fly. 
 */
export const Flex = styled.div<FlexProps>`${({$display = 'flex', $direction = 'row', $wrap = 'wrap', $justify = 'space-between', $align = 'center', $gap = '0rem'}) => css`
display: ${$display};
flex-direction: ${$direction};
flex-wrap: ${$wrap};
justify-content: ${$justify};
align-items: ${$align};
gap: ${$gap};
`}`;