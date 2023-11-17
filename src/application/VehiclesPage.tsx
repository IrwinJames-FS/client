import { useCRUD } from "./hooks";
import { Manufacturer, Vehicle } from "./models";
import { Application, Header } from "./ui"
import { List, RowIterator } from "./ui/List";
import { NavigationView } from "./ui/NavigationView"


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