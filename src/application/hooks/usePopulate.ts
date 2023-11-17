import { useState } from "react"
import { Manufacturer, Vehicle } from "../models";
import { MOCKDATA } from "../bin/MOCKDATA";

type PopulateState = {
	status: 'ready' | 'running' | 'failed',
	error?: Error
}

export const usePopulate = () => {
	
	const [populationState, setState] = useState<PopulateState>({status: 'ready', error:undefined})
	const populate = () => {
		console.log("Time to start populating");
	}
	return {populationState, populate};
}