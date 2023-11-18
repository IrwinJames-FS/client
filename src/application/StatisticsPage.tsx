import { usePopulate } from "./hooks/usePopulate";
import { Application, Flex, Header, RoundedLink } from "./ui";
import { NavigationView } from "./ui/NavigationView";
import { FaInfo } from "react-icons/fa";
import { cVar } from "./ui/theme";

export const StatisticsPage = () => {
	const {populationState, populate} = usePopulate();
	const PopulateOptions = {
		as:"button",
		type:"button",
		$background: cVar('navigation-background'),
		$hoverBackgroundColor: cVar('navigation-hover-overlay'),
		$height: '2rem',
		$radius: '1rem',
		onClick: populate
	}
	return (<Application>
		<Header>
			<h1>Statistics</h1>
			<Flex>
				<NavigationView/>
				<RoundedLink {...PopulateOptions}><FaInfo/></RoundedLink>
			</Flex>
		</Header>
		<main>
			{populationState.status == 'ready' && <h1>I am ready</h1>}
			{populationState.status == 'failed' && <h1>I have failed</h1>}
			{populationState.status == 'running' && <h1>I am running</h1>}
		</main>
	</Application>);
}

