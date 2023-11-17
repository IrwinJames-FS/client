import { Record } from "./Record";
import { Vehicle } from "./Vehicle";

type VehicleReference = Vehicle | string;

export interface Manufacturer extends Record {
	name: string,
	established: string,
	revenue: number,
	models: VehicleReference[]
}