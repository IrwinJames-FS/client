import { LoaderFunction } from "react-router-dom";
import { CRUD } from "../bin/CRUD";
import { Manufacturer } from "../models"
import { DeleteMethod, UpdateMethod } from "../bin/CRUD.types";
const {create, read, readById, update, deleteById} = CRUD<Manufacturer>('manufacturer');
export const ManufacturersLoader = async ():Promise<{manufacturers: Manufacturer[], deleteById: DeleteMethod<Manufacturer>}> => {
	const manufacturers = await read();
	return {manufacturers, deleteById};
}

export const ManufacturerLoader:LoaderFunction = async ({params}): Promise<{manufacturer:Manufacturer, update: UpdateMethod<Manufacturer>, deleteById: DeleteMethod<Manufacturer>}> => {
	const { id } = params;
	if(!id) return { 
		manufacturer:{
			_id: "",
			name: "",
			established: new Date(),
			revenue:0
		},
		update:create,
		deleteById
	};
	const manufacturer = await readById(id);
	return {manufacturer, update, deleteById};
};