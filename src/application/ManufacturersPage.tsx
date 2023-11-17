import { Application, Header, List, RoundedLink } from "./ui";
import { NavigationView } from "./ui/NavigationView";
import { Manufacturer, Vehicle } from "./models";
import { useCRUD } from "./hooks";
import { RowIterator } from "./ui/List";
import { cVar } from "./ui/theme";

export const ManufacturersPage = () => {
	const { useRead } = useCRUD<Manufacturer>("manufacturer");
	const { result: array, error } = useRead<Manufacturer>();

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
	</tr>);
	return (<Application>
		<Header>
			<h1>Manufacturers</h1>
			<NavigationView/>
		</Header>
		{array && <List {...{array, header, RowElement: row}}/>}
	</Application>);
}