import { useState } from "react"
import { Manufacturer, Vehicle, Record } from "../models";
import { MOCKDATA } from "../bin/MOCKDATA";
import { CRUD } from "../bin/CRUD";

type PopulateState = {
	status: 'ready' | 'running' | 'failed',
	error?: unknown
}

export const usePopulate = () => {
	const {create: createVehicle} = CRUD<Vehicle>('vehicle');
	const {create: createManufacturer} = CRUD<Manufacturer>('manufacturer');

	const [populationState, setState] = useState<PopulateState>({status: 'ready', error:undefined})
	
	const populate = async () => {
		setState({status:"running"});
		console.log(JSON.parse(JSON.stringify(MOCKDATA.manufacturers)));
		try {
			const manufacturerIds = await popIt(MOCKDATA.manufacturers, item=>createManufacturer<Manufacturer>(item));
			console.log(manufacturerIds);
			await popIt(MOCKDATA.vehicles, item => {
				const manId = parseInt(item.manufacturer as string);
				item.manufacturer = manufacturerIds[manId];
				return createVehicle<Vehicle>(item);
				
			});
			setState({status:"ready"});
		} catch(error){
			setState({status: "failed", error});
		}
	}

	const popIt = <T extends Record>(array: T[], iteration: (item:T) => Promise<T>): Promise<string[]> => new Promise<string[]>((resolve, reject) => {
		let ids: string[] = [];
		if(array.length === 0) return resolve(ids);
		const item = array.shift()!;
		return iteration(item)
		.then(result => {
			ids.push(result._id);
			return popIt(array, iteration)
			.then(newIds => {
				ids.push(...newIds)
				return resolve(ids);
			});
		});
	});

	return {populationState, populate};
}