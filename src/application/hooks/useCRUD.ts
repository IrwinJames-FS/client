import { useEffect, useState } from "react"
import { Record } from "../models"
import { DELETE, GET, POST, PUT } from "../bin/rest"
import { CRUD, RequestResult } from "./useCRUD.types"


export const useCRUD = <T extends Record>(collection: string) : CRUD => {
	const BASE_URL = `http://localhost:3001/v1/${collection}`;

	const useAxios = <T>(method: Promise<T>): RequestResult<T> => {
		const [state, setState] = useState<RequestResult<T>>({});

		useEffect(()=>{
			method
			.then(result => setState({result, error: undefined}))
			.catch(error => setState({result: undefined, error}));
		}, []);

		return state;
	}
	const create = <T extends Record>(record: T) => POST<T>(BASE_URL, record);
	const useRead = <T extends Record>(): RequestResult<T[]> => useAxios<T[]>(GET<T[]>(BASE_URL));
	const useReadById = <T extends Record>(id: string): RequestResult<T> => useAxios<T>(GET(`${BASE_URL}/id/${id}`));
	const update = <T extends Record>(record: T) => PUT<T>(`${BASE_URL}/id/${record._id}`, record);
	const deleteById = <T extends Record>(id:string) => DELETE<T | undefined>(`${BASE_URL}/id/${id}`);
	return {
		create,
		useRead,
		useReadById,
		update,
		deleteById
	}
}