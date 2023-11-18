import styled from "styled-components";
import { Manufacturer, Vehicle } from "./models";
import { Application, Header, RoundedLink, Flex, CircleLink, CircleButton, NavigationView, List, RowIterator } from "./ui"


import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


export const VehiclesPage = () => {
	const array = useLoaderData() as Vehicle[];
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
				<CircleButton className="dangerous"><FaTrash/></CircleButton>
				
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
		</main>
	</Application>)
}

const Span = styled.span`
background-color: var(--vip-bg-1);
padding: 0 0.5rem;
border-radius: 1rem;
margin: 0.25rem;
`