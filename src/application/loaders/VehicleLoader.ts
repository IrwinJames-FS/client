import { LoaderFunction, useParams } from "react-router-dom";
import { CRUD } from "../bin/CRUD";
import { Manufacturer, Vehicle, Record } from "../models"
import { DeleteMethod, UpdateMethod } from "../bin/CRUD.types";
const {create, read, readById, update, deleteById} = CRUD<Vehicle>('vehicle');
const {read: readManufacturers} = CRUD<Manufacturer>('manufacturer');

export const VehiclesLoader = async (): Promise<{vehicles:Vehicle[], deleteById: DeleteMethod<Vehicle>}> => {
	const vehicles = await read();
	return {vehicles, deleteById};
}

export const VehicleLoader: LoaderFunction = async ({params}): Promise<{vehicle:Vehicle, manufacturers: Manufacturer[], update: UpdateMethod<Vehicle>, deleteById: DeleteMethod<Vehicle>}> => {
	const manufacturers = await readManufacturers();

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
		update:create,
		deleteById
	};
	const vehicle = await readById(id);
	vehicle.manufacturer = (vehicle.manufacturer as Manufacturer)._id;
	return {vehicle, manufacturers, update, deleteById};
};