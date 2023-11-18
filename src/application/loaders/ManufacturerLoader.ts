import { CRUD } from "../bin/CRUD";
import { Manufacturer } from "../models"
const {read, readById, deleteById} = CRUD<Manufacturer>('manufacturer');
export const ManufacturersLoader = async () => {
	const manufacturers = await read<Manufacturer>();
	return manufacturers;
}