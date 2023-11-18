import { LoaderFunction, useParams } from "react-router-dom";
import { CRUD } from "../bin/CRUD";
import { Vehicle } from "../models"
const {read, readById, deleteById} = CRUD<Vehicle>('vehicle');

export const VehiclesLoader = async (): Promise<Vehicle[]> => {
	const vehicles = await read<Vehicle>();
	return vehicles;
}

export const VehicleLoader: LoaderFunction = async ({params}): Promise<Vehicle> => {
	
	const { id } = params;
	if(!id) return {
		_id: "",
		model: "",
		releaseDate: new Date(),
		vehicleType: [],
		manufacturer: ""
	}
	const vehicle = await readById<Vehicle>(id)
	return vehicle
};