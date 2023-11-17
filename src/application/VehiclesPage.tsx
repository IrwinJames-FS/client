import styled from "styled-components";
import { useCRUD } from "./hooks";
import { Manufacturer, Vehicle } from "./models";
import { Application, Header, RoundedLink } from "./ui"
import { List, RowIterator } from "./ui/List";
import { NavigationView } from "./ui/NavigationView"
import { FaEdit, FaTrash } from "react-icons/fa";


export const VehiclesPage = () => {
	const {useRead} = useCRUD<Vehicle>('vehicle');
	const {result: array, error} = useRead<Vehicle>()
	
	const header = (<tr>
		<th>Model</th>
		<th>Manufacturer</th>
		<th>Release Date</th>
		<th>Vehicle Types</th>
		<th></th>
	</tr>);

	const row: RowIterator<Vehicle> = ({item}) => (<tr>
		<td>{item.model}</td>
		<td>{(item.manufacturer as Manufacturer)?.name}</td>
		<td>{item.releaseDate && new Date(item.releaseDate).toLocaleDateString("en-us")}</td>
		<td>{item.vehicleType?.map((t, i)=><span key={i}></span>)}</td>
		<td>
			<RoundedLink $background="rgba(0,0,0,0.2)" $width="2rem" $height="2rem" $radius="1rem"><FaEdit/></RoundedLink>
			<RoundedLink $background="rgba(255,0,0,1)" $color="#fff" $width="2rem" $height="2rem" $radius="1rem"><FaTrash/></RoundedLink>
		</td>
	</tr>);

	return (<Application>
		<Header>
			<h1>Vehicles</h1>
			<NavigationView/>
		</Header>
		<main>
			{array && <List {...{array, header, RowElement:row}}/>}
		</main>
	</Application>)
}

const Span = styled.span`
`