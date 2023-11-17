import { Record } from "../models"


export interface CRUD {
	create: <T extends Record>(record: T) => Promise<T>,
	useRead: <T extends Record>() => RequestResult<T[]>,
	useReadById: <T extends Record>(id:string) => RequestResult<T>,
	update: <T extends Record>(record: T) => Promise<T>
	deleteById: <T extends Record>(id: string) => Promise<T | undefined>
}

export interface RequestResult<T> {
	result?: T,
	error?: unknown
}