import { LoaderFunction } from "react-router-dom";
import { CRUD } from "../bin/CRUD";
import { Manufacturer } from "../models"
const {create, read, readById, update, deleteById} = CRUD<Manufacturer>('manufacturer');
export const ManufacturersLoader = async () => {
	const manufacturers = await read<Manufacturer>();
	return manufacturers;
}

export const ManufacturerLoader:LoaderFunction = async ({params}): Promise<{manufacturer:Manufacturer, update: (record: Manufacturer)=>Promise<Manufacturer>}> => {
	const { id } = params;
	if(!id) return { 
		manufacturer:{
			_id: "",
			name: "",
			established: new Date(),
			revenue:0
		},
		update:create
	};
	const manufacturer = await readById<Manufacturer>(id);
	return {manufacturer, update};
};