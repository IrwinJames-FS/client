
import { Record } from "../models"
import { DELETE, GET, POST, PUT } from "../bin/rest"
import { CRUDLY, DeleteMethod, ReadByIDMethod, ReadMethod, UpdateMethod } from "./CRUD.types";


export const CRUD = <T extends Record>(collection: string) : CRUDLY<T> => {
	const BASE_URL = `http://localhost:3001/v1/${collection}`;
	const create: UpdateMethod<T> = <T extends Record>(record: T) => {
		const {_id, ...rec} = record;
		console.log(rec);
		return POST<T>(BASE_URL, JSON.parse(JSON.stringify(rec)));
	};
	const read: ReadMethod<T> = () => GET<T[]>(BASE_URL);
	const readById: ReadByIDMethod<T> = (id: string) => GET<T>(`${BASE_URL}/id/${id}`);
	const update: UpdateMethod<T> = (record: T) => PUT<T>(`${BASE_URL}/id/${record._id}`, record);
	const deleteById: DeleteMethod<T> = (id:string) => DELETE<T | undefined>(`${BASE_URL}/id/${id}`);
	return {
		create,
		read,
		readById,
		update,
		deleteById
	}
}