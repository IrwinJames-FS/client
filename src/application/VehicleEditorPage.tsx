import { MouseEvent } from "react";
import { useLoaderData, useNavigate } from "react-router-dom"
import { Application, Header, Input, Flex, Select, CircleLink, CircleButton, ToastType } from "./ui";
import { ChangeEvent, FormEvent, useState } from "react";
import { Manufacturer, Vehicle, Record } from "./models";
import { vehicleTypes } from "./models/vehicleTypes";
import { FaSave, FaTimes, FaTrash } from "react-icons/fa";
import { DeleteMethod, UpdateMethod } from "./bin/CRUD.types";
import { useToast } from "./hooks/useToast";


export const VehicleEditorPage = () => {
	
	const {vehicle:v, manufacturers, update, deleteById} = useLoaderData() as {vehicle: Vehicle, manufacturers: Manufacturer[], update: UpdateMethod<Vehicle>, deleteById: DeleteMethod<Vehicle>}
	const [toast, presentToast] = useToast();
	const deleteToast = async (event: MouseEvent<HTMLButtonElement>) => {
		const id = event.currentTarget.getAttribute('data-id')!;
		const confirmed = await presentToast(ToastType.dangerous, (<p>This will permanently delete this vehicle. Are you sure?</p>));
		if (!confirmed) return;
		await deleteById(id);
		navigate('/vehicles');
	}
	const navigate = useNavigate();
	const [vehicle, setVehicle] = useState<Vehicle>(v);
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if(!(event.target as HTMLFormElement).reportValidity()) return;
		//scrub the manufacturer details if any exists

		update(vehicle)
		.then(resp => navigate("/vehicles"));
	}
	const updateModel = (event: ChangeEvent<HTMLInputElement>) => setVehicle({...vehicle, model: event.target.value});
	const updateReleaseDate = (event: ChangeEvent<HTMLInputElement>) => setVehicle({...vehicle, releaseDate: new Date(event.target.value)})
	const updateVehicleType = (event: ChangeEvent<HTMLSelectElement>) => {
		let vehicleType = Array.from(event.target.options).filter(t=>t.selected).map(t=>vehicleTypes.find(vt=>vt===t.value)!)
		return setVehicle({...vehicle, vehicleType});
	}
	const updateManufacturer = (event: ChangeEvent<HTMLSelectElement>) => setVehicle({...vehicle, manufacturer: event.target.value})
	return (<Application>
		<Header>
			<h1>Editor</h1>
			<Flex>
				<CircleLink to="/vehicles"><FaTimes/></CircleLink>
				{vehicle._id.length && <CircleButton className="dangerous" data-id={vehicle._id} onClick={deleteToast}><FaTrash/></CircleButton>}
				<CircleButton className="primary" form="vehicle-form"><FaSave/></CircleButton>
			</Flex>
		</Header>
		<main>
			<Flex as="form" id="vehicle-form" $direction="column" $align="stretch" $gap="1rem" onSubmit={onSubmit}>
				<Input lbl="Model" value={vehicle.model} onChange={updateModel}/>
				<Input lbl="Release Date" type="date" value={vehicle.releaseDate ? new Date(vehicle.releaseDate).toISOString().split('T')[0]:""} onChange={updateReleaseDate}/>
				<Select lbl="Vehicle Type" value={vehicle.vehicleType ?? []} onChange={updateVehicleType} multiple>
					{vehicleTypes.map((vt, i)=>(<option key={i}>{vt}</option>))}
				</Select>
				<Select lbl="Manufacturer" value={(vehicle.manufacturer! as string)} onChange={updateManufacturer}>
					{manufacturers.map(m=>(<option key={m._id} value={m._id}>{m.name}</option>))}
				</Select>
			</Flex>
			{toast}
		</main>
	</Application>);
}