import { ReactNode } from "react"
import { styled, css } from "styled-components"
import { FaCheck, FaInfoCircle, FaExclamationTriangle } from "react-icons/fa"

export enum ToastType {
	primary = 'primary',
	success = 'success',
	dangerous = 'dangerous'
}

export type ToastProps = {
	active: boolean,
	type?: ToastType,
	children?: ReactNode,
}
export const Toast = ({active, type = ToastType.primary, children}:ToastProps) => {
	let icon: ReactNode
	switch (type) {
		case ToastType.primary:
			icon = <FaInfoCircle size={70}/>
			break;
		case ToastType.success:
			icon = <FaCheck size={70}/>
			break;
		case ToastType.dangerous:
			icon = <FaExclamationTriangle size={70}/>
	}
	return (<StyledToast $type={type} className={active ? 'active':''}>
		{icon}
		{children}
	</StyledToast>);
}

type StyleToastProps = {
	$type: ToastType
}
const StyledToast = styled.div<StyleToastProps>`
	position: absolute;
	top: -10rem;
	left: 40vw;
	display: flex;
	flex-flow: column nowrap;
	justify-content: start;
	align-items: center;
	gap:0.5rem;
	width: 20vw;
	padding: 0.25rem;
	background-color: var(--vip-bg-1);
	transition: 1s;
	
	border-radius: 1rem;
	box-shadow: 4px 4px 4px #000;

	&.active{
		top: 1rem;
	}

	&>div {
		padding: 1rem;
		display:flex;
		flex-flow: row nowrap;
		justify-content: space-evenly;
		align-items: stretch;
		&:last-of-type{
			align-self: stretch;
		}
	}
	

	${({$type}) => {
		switch ($type){
			case ToastType.primary:
				return css`
					& > svg{
						color: var(--vip-primary-1);
					}

					& a, button{
						background-color: var(--vip-bg-4);
						&:hover{
							background-color: var(--vip-bg-5);
						}
					}
				`;
			case ToastType.success:
				return css`
					& > svg{
						color: var(--vip-success-1);
					}

					& a, button{
						background-color: var(--vip-success-2);
						&:hover{
							background-color: var(--vip-success-3);
						}
					}
				`;
			case ToastType.dangerous:
				return css`
					& > svg{
						color: var(--vip-dangerous-1);
					}
					& a, button{
						&:first-of-type{
							background-color: var(--vip-bg-4);
							&:hover{
								background-color: var(--vip-bg-5);
							}
						}
						&:last-of-type{
							background-color: var(--vip-dangerous-1);
							&:hover{
								background-color: var(--vip-dangerous-2);
							}
						}
					}
				`
		}
	}}
`