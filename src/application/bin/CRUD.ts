
import { Record } from "../models"
import { DELETE, GET, POST, PUT } from "../bin/rest"
import { CRUDLY } from "./CRUD.types";


export const CRUD = <T extends Record>(collection: string) : CRUDLY => {
	const BASE_URL = `http://localhost:3001/v1/${collection}`;
	const create = <T extends Record>(record: T) => {
		const {_id, ...rec} = record;
		console.log(rec);
		return POST<T>(BASE_URL, JSON.parse(JSON.stringify(rec)));
	};
	const read = <T extends Record>(): Promise<T[]> => GET<T[]>(BASE_URL);
	const readById = <T extends Record>(id: string): Promise<T> => GET(`${BASE_URL}/id/${id}`);
	const update = <T extends Record>(record: T) : Promise<T> => PUT<T>(`${BASE_URL}/id/${record._id}`, record);
	const deleteById = <T extends Record>(id:string) => DELETE<T | undefined>(`${BASE_URL}/id/${id}`);
	return {
		create,
		read,
		readById,
		update,
		deleteById
	}
}