import { Application, CircleLink, Flex, Header, List, RoundedLink, CircleButton } from "./ui";
import { NavigationView } from "./ui/NavigationView";
import { Manufacturer, Vehicle } from "./models";
import { RowIterator } from "./ui/List";
import { cVar } from "./ui/theme";
import { useLoaderData } from "react-router-dom";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

export const ManufacturersPage = () => {
	
	const array = useLoaderData() as Manufacturer[];

	const header = (<tr>
		<th>Name</th>
		<th>Established</th>
		<th>Revenue</th>
		<th>Models</th>
		<th></th>
	</tr>)

	const row: RowIterator<Manufacturer> = ({item}) => (<tr>
		<td>{item.name}</td>
		<td>{item.established && new Date(item.established).toLocaleDateString("en-us")}</td>
		<td>{item.revenue && item.revenue.toLocaleString("en-us", {style:"currency", currency:"USD"})}</td>
		<td>{(item.models as Vehicle[])?.map(model => <RoundedLink key={model._id} $background={cVar('navigation-background')} $radius="0.75rem" $height="1.5rem">{model.model}</RoundedLink>)}</td>
		<td>
			<CircleLink className="primary" to={`/manufacturers/id/${item._id}`}><FaEdit/></CircleLink>
			<CircleButton className="dangerous"><FaTrash/></CircleButton>
		</td>
	</tr>);

	return (<Application>
		<Header>
			<h1>Manufacturers</h1>
			<Flex>
				<NavigationView/>
				<CircleLink className="primary" to="/manufacturers/id"><FaPlus/></CircleLink>
			</Flex>
			
		</Header>
		{array && <List {...{array, header, RowElement: row}}/>}
	</Application>);
}