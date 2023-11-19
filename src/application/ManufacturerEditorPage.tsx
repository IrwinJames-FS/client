import { MouseEvent } from "react";
import { useLoaderData, useNavigate } from "react-router-dom"
import { Application, Header, Input, Flex, Select, CircleLink, CircleButton, ToastType } from "./ui";
import { ChangeEvent, FormEvent, useState } from "react";
import { Manufacturer, Vehicle, Record } from "./models";
import { FaSave, FaTimes, FaTrash } from "react-icons/fa";
import { DeleteMethod, UpdateMethod } from "./bin/CRUD.types";
import { useToast } from "./hooks/useToast";
import { WAIT } from "./bin/rest";


export const ManufacturerEditorPage = () => {
	
	const {manufacturer:m, update, deleteById} = useLoaderData() as {manufacturer: Manufacturer, update: UpdateMethod<Manufacturer>, deleteById:DeleteMethod<Manufacturer>}
	const [toast, presentToast] = useToast();
	const deleteToast = async (event: MouseEvent<HTMLButtonElement>) => {
		const id = event.currentTarget.getAttribute('data-id')!;
		const confirmed = await presentToast(ToastType.dangerous, (<p>This will permanently delete this manufacturer and any related vehicles. Are you sure?</p>));
		if (!confirmed) return;
		await deleteById(id);
		await WAIT(1e3);
		confirmSaveToast()
	}
	const confirmSaveToast = async () => {
		await presentToast(ToastType.success, (<p>Manufacturers Deleted!</p>), 1e4);
		await WAIT(1e3);
		navigate('/manufacturers');
	}
	const navigate = useNavigate();
	const [manufacturer, setManufacturer] = useState<Manufacturer>(m);
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if(!(event.target as HTMLFormElement).reportValidity()){
			console.log("form invalid");
			 return;
		}
		console.log("form valid");
		update(manufacturer)
		.then(resp => navigate("/manufacturers"));
	}
	const updateName = (event: ChangeEvent<HTMLInputElement>) => setManufacturer({...manufacturer, name: event.target.value});
	const updateEstablished = (event: ChangeEvent<HTMLInputElement>) => setManufacturer({...manufacturer, established: new Date(event.target.value)});
	const updateRevenue = (event: ChangeEvent<HTMLInputElement>) => setManufacturer({...manufacturer, revenue: event.target.value.length > 0 ? parseFloat(event.target.value.replace(/\$/g, '')) : 0});
	return (<Application>
		<Header>
			<h1>Editor</h1>
			<Flex>
				<CircleLink to="/manufacturers"><FaTimes/></CircleLink>
				{manufacturer._id.length > 0 && <CircleButton className="dangerous" data-id={manufacturer._id} onClick={deleteToast}><FaTrash/></CircleButton>}
				<CircleButton className="primary" form="manufacturer-form"><FaSave/></CircleButton>
			</Flex>
		</Header>
		<main>
			<Flex as="form" id="manufacturer-form" $direction="column" $align="stretch" $gap="1rem" onSubmit={onSubmit}>
				<Input lbl="Name" value={manufacturer.name} onChange={updateName} required/>
				<Input lbl="Established" type="date" value={manufacturer.established ? new Date(manufacturer.established).toISOString().split('T')[0]:""} onChange={updateEstablished} required/>
				<Input lbl="Revenue" value={manufacturer.revenue} onChange={updateRevenue} required/>
			</Flex>
			{toast}
		</main>
	</Application>);
}