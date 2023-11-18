import { Record } from "../models"


export interface CRUDLY {
	create: <T extends Record>(record: T) => Promise<T>,
	read: <T extends Record>() => Promise<T[]>,
	readById: <T extends Record>(id:string) => Promise<T>,
	update: <T extends Record>(record: T) => Promise<T>
	deleteById: <T extends Record>(id: string) => Promise<T | undefined>
}