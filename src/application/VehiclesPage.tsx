import styled from "styled-components";
import { Manufacturer, Vehicle, Record } from "./models";
import { Application, Header, Flex, CircleLink, CircleButton, NavigationView, List, RowIterator, RoundedButton, ToastType } from "./ui"


import { FaEdit, FaTrash, FaPlus, FaTimes, FaCheck } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { MouseEvent, useState } from "react";
import { useToast } from "./hooks/useToast";


export const VehiclesPage = () => {
	const navigate = useNavigate();
	const {vehicles:array, deleteById} = useLoaderData() as {vehicles:Vehicle[], deleteById: <T extends Record>(id: String)=>Promise<T | undefined>};
	const [toast, presentToast] = useToast();
	const deleteToast = async (event: MouseEvent<HTMLButtonElement>) => {
		const id = event.currentTarget.getAttribute('data-id')!;
		const confirmed = await presentToast(ToastType.dangerous, (<p>This will permanently delete this vehicle. Are you sure?</p>));
		if (!confirmed) return;
		await deleteById(id);
		navigate('/vehicles');
	}
	
	
	const header = (<tr>
		<th>Model</th>
		<th>Manufacturer</th>
		<th>Release Date</th>
		<th>Vehicle Types</th>
		<th></th>
	</tr>);

	const row: RowIterator<Vehicle> = ({item}) => {
		return (<tr>
			<td>{item.model}</td>
			<td>{(item.manufacturer as Manufacturer)?.name}</td>
			<td>{item.releaseDate && new Date(item.releaseDate).toLocaleDateString("en-us")}</td>
			<td>{item.vehicleType?.map((t, i)=>(<Span key={i}>{t}</Span>))}</td>
			<td>
				<CircleLink className="primary" to={`/vehicles/id/${item._id}`}><FaEdit/></CircleLink>
				<CircleButton className="dangerous" data-id={item._id} onClick={deleteToast}><FaTrash/></CircleButton>
			</td>
		</tr>);
	}

	return (<Application>
		<Header>
			<h1>Vehicles</h1>
			<Flex>
				<NavigationView/>
				<CircleLink to="/vehicles/id" className="primary"><FaPlus/></CircleLink>
			</Flex>
		</Header>
		<main>
			{array && <List {...{array, header, RowElement:row}}/>}
			{toast}
		</main>
	</Application>)
}

const Span = styled.span`
background-color: var(--vip-bg-1);
padding: 0 0.5rem;
border-radius: 1rem;
margin: 0.25rem;
`;