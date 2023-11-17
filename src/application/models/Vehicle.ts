import { Manufacturer } from "./Manufacturer";
import { Record } from "./Record";
import { VehicleType } from "./vehicleTypes";
export interface Vehicle extends Record{
	model: string,
	releaseDate?: Date,
	manufacturer?: Manufacturer | string,
	vehicleType?: VehicleType[]
}