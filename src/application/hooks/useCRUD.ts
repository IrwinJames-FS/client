import axios from "axios"
import { Record } from "../models"
import { DELETE, GET, POST, PUT } from "../bin/rest"

interface CRUD {
	create: <T extends Record>(record: T) => Promise<T>,
	read: <T extends Record>() => Promise<T[]>,
	readById: <T extends Record>(id:string) => Promise<T>,
	update: <T extends Record>(record: T) => Promise<T>,
	delete: <T extends Record>(id: string) => Promise<T | undefined>
}
export const useCRUD = <T extends Record>(collection: string) : CRUD => {
	const BASE_URL = `http://localhost:3001/v1/${collection}`;

	return {
		create: <T extends Record>(record: T) => POST<T>(BASE_URL, record),
		read: <T extends Record>() => GET<T[]>(BASE_URL),
		readById: <T extends Record>(id: string) => GET<T>(`${BASE_URL}/id/${id}`),
		update: <T extends Record>(record: T) => PUT<T>(`${BASE_URL}/id/${record._id}`, record),
		delete: <T extends Record>(id:string) => DELETE<T | undefined>(`${BASE_URL}/id/${id}`)
	}
}