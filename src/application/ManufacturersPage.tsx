import { MouseEvent } from "react";
import { Application, CircleLink, Flex, Header, List, RoundedLink, CircleButton, ToastType } from "./ui";
import { NavigationView } from "./ui/NavigationView";
import { Manufacturer, Vehicle, Record } from "./models";
import { RowIterator } from "./ui/List";
import { cVar } from "./ui/theme";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { useToast } from "./hooks/useToast";
import { DeleteMethod } from "./bin/CRUD.types";
import { WAIT } from "./bin/rest";

export const ManufacturersPage = () => {
	const navigate = useNavigate();
	const {manufacturers:array, deleteById} = useLoaderData() as {manufacturers:Manufacturer[], deleteById:DeleteMethod<Manufacturer>};

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
		await presentToast(ToastType.success, (<p>Manufacturer Deleted!</p>), 1e4);
		await WAIT(1e3);
		navigate('/manufacturers');
	}
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
		<td>{(item.models as Vehicle[])?.map(model => <RoundedLink key={model._id} to={`/vehicles/id/${model._id}`} $background={cVar('bg-1')} $hoverBackgroundColor={cVar('bg-4')} $radius="0.75rem" $height="1.5rem">{model.model}</RoundedLink>)}</td>
		<td>
			<CircleLink className="primary" to={`/manufacturers/id/${item._id}`}><FaEdit/></CircleLink>
			<CircleButton className="dangerous" data-id={item._id} onClick={deleteToast}><FaTrash/></CircleButton>
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
		<main>
			{array && <List {...{array, header, RowElement: row}}/>}
			{toast}
		</main>
		
	</Application>);
}