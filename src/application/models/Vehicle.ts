import { Record } from "./Record";
export interface Vehicle extends Record{
	model: string,
	releaseDate?: Date,
}