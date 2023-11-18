import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
	lbl: string
}
export const Input = ({lbl, type = "text", ...rest}:InputProps) => (<StyledLabel>
	<span>{lbl}</span>
	<input type={type} {...rest}/>
</StyledLabel>);

interface SelectProps extends ComponentPropsWithoutRef<"select">{
	lbl: string
}

export const Select = ({lbl, ...rest}:SelectProps) => (<StyledLabel>
	<span>{lbl}</span>
	<select {...rest}/>
</StyledLabel>);

const StyledLabel = styled.label`
	display:flex;
	flex-flow: column nowrap;
	background-color: var(--vip-bg-3);
	&:focus-within{
		background-color:var(--vip-bg-4);
	}
	input{
		appearance:none;
		background:none;
		border:none;
		border-bottom: 1px solid var(--vip-bg-4);
		color: var(--vip-fg);
		outline:none;
	}
	select{
	}
`


