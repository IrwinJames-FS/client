import { Record } from "./Record";
import { Vehicle } from "./Vehicle";

type VehicleReference = Vehicle | string;

export interface Manufacturer extends Record {
	name: string,
	established?: Date,
	revenue?: number,
	models?: VehicleReference[]
}