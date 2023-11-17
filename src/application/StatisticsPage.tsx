import { usePopulate } from "./hooks/usePopulate";
import { Application, Header } from "./ui";
import { NavigationView } from "./ui/NavigationView";

export const StatisticsPage = () => {
	const {populationState, populate} = usePopulate();
	return (<Application>
		<Header>
			<h1>Statistics</h1>
			<NavigationView/>
		</Header>
		<main>
			{populationState.status == 'ready' && <h1>I am ready</h1>}
			{populationState.status == 'failed' && <h1>I have failed</h1>}
			{populationState.status == 'running' && <h1>I am running</h1>}
		</main>
	</Application>);
}