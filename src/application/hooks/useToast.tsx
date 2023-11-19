import { ReactNode, useState } from "react";
import { RoundedButton, RoundedButtonProps, Toast, ToastProps, ToastType } from "../ui"
import { FaCheck, FaTimes } from "react-icons/fa";

type Resolver = (value: boolean) => void
export const useToast = ():[ReactNode, (type:ToastType, children?:ReactNode, duration?: number)=>Promise<boolean>, (value:boolean)=>void] => {
	const [state, setState] = useState<ToastProps>({active:false, type: ToastType.primary});
	let resolver: Resolver | undefined;
	let timeoutID: number = -1;
	const btnProps: RoundedButtonProps = {
		$direction: 'row',
		$gap: '0.5rem',
		$radius: '1rem',
		$padding: '0.5rem'
	}
	const confirm = () => dismiss(true);
	const cancel = () => dismiss(false);
	const PrimaryActionPanel = (<div>
		<RoundedButton {...btnProps} onClick={confirm}><FaTimes/> Close </RoundedButton>
	</div>)
	const SuccessActionPanel = (<div>
		<RoundedButton {...btnProps} onClick={confirm}><FaCheck/></RoundedButton>
	</div>)
	const DangerousActionPanel = (<div>
		<RoundedButton {...btnProps} onClick={cancel}><FaTimes/>Cancel</RoundedButton>
		<RoundedButton {...btnProps} onClick={confirm}><FaCheck/>Confirm</RoundedButton>
	</div>)
	const actionPanel = (type: ToastType): ReactNode => {
		switch (type) {
			case ToastType.primary:
				return PrimaryActionPanel;
			case ToastType.success:
				return SuccessActionPanel;
			case ToastType.dangerous:
				return DangerousActionPanel;
		}
	}
	const present = (type: ToastType = ToastType.primary, children?: ReactNode, duration: number = -1) => new Promise<boolean>(resolve => {
		setState({active: true, type, children: (<>
		<div>
			{children}
		</div>
		{actionPanel(type)}
		</>)});
		resolver = resolve;
		if (~duration) {
			if(~timeoutID){
				window.clearTimeout(timeoutID);
				timeoutID = -1;
			}
			timeoutID = window.setTimeout(()=>dismiss(true), duration);
		}
	})
	.then(result => {
		setState({type, children, active: false});
		return result;
	});
	const dismiss = (value: boolean) => {
		if(resolver) resolver(value);
	}
	return [(<Toast {...state}/>), present, dismiss];
}