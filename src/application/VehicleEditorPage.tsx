import { useLoaderData, useLocation, useParams } from "react-router-dom"
import { Application, Header, Input } from "./ui";
import { FormEvent } from "react";
import { Vehicle } from "./models";

export const VehicleEditorPage = () => {
	console.log("Vehicle edit page");
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	}
	return (<Application>
		<Header>
			<h1>Editor</h1>
			
		</Header>
		<form onSubmit={onSubmit}>
		</form>
	</Application>);
}