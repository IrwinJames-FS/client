import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
	lbl: string
}
export const Input = ({lbl}:InputProps) => (<StyledLabel>
	<span>{lbl}</span>
</StyledLabel>);

const StyledLabel = styled.label`
	display:flex;
	flex-flow: column nowrap;
`