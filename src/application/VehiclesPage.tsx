import { Application, Header } from "./ui"
import { NavigationView } from "./ui/NavigationView"

export const VehiclesPage = () => {
	return (<Application>
		<Header>
			<h1>Vehicles</h1>
			<NavigationView/>
		</Header>
	</Application>)
}