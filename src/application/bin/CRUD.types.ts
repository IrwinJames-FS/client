import { Record } from "../models"


export interface CRUDLY<T extends Record> {
	create: UpdateMethod<T>
	read: ReadMethod<T>
	readById: ReadByIDMethod<T>
	update: UpdateMethod<T>
	deleteById: DeleteMethod<T>
}


export type ReadMethod<T extends Record> = () => Promise<T[]>
export type ReadByIDMethod<T extends Record> = (id: string) => Promise<T>
export type UpdateMethod<T extends Record> = (record: T) => Promise<T>
export type DeleteMethod<T extends Record> = (id: string) => Promise<T | undefined> 