import { LoaderFunction, useParams } from "react-router-dom";
import { CRUD } from "../bin/CRUD";
import { Manufacturer, Vehicle, Record } from "../models"
const {create, read, readById, update, deleteById} = CRUD<Vehicle>('vehicle');
const {read: readManufacturers} = CRUD<Manufacturer>('manufacturer');

export const VehiclesLoader = async (): Promise<Vehicle[]> => {
	const vehicles = await read<Vehicle>();
	return vehicles;
}

export const VehicleLoader: LoaderFunction = async ({params}): Promise<{vehicle:Vehicle, manufacturers: Manufacturer[], update: <T extends Record>(record: T)=>Promise<T>}> => {
	const manufacturers = await readManufacturers<Manufacturer>();

	const { id } = params;
	if(!id) return { 
		vehicle:{
			_id: "",
			model: "",
			releaseDate: new Date(),
			vehicleType: [],
			manufacturer: ""
		},
		manufacturers,
		update:create
	};
	const vehicle = await readById<Vehicle>(id);
	vehicle.manufacturer = (vehicle.manufacturer as Manufacturer)._id;
	return {vehicle, manufacturers, update};
};