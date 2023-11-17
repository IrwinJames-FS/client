import { Manufacturer, Vehicle } from "../models"
import { VehicleType } from "../models/vehicleTypes"

export type MockData = {
	manufacturers: Manufacturer[],
	vehicles: Vehicle[]
}
export const MOCKDATA:MockData = {
	manufacturers:[
		{
			_id: "",
			name: "Honda",
			established: new Date("1948-09-24T04:00:00.000Z"),
			revenue:98547410000
		},
		{
			_id:"",
			name:"Chrysler",
			established: new Date("1925-07-6T04:00:00.000Z"),
			revenue:6000000000
		},
		{
			_id:"",
			name:"Ford",
			established: new Date("1903-07-16T04:00:00.000Z"),
			revenue:169819000000
		}
	],
	vehicles:[
		{
			_id:"",
			model:"Civic",
			manufacturer:"0",
			vehicleType:[
				VehicleType.sedan,
				VehicleType.hatchback
			],
			releaseDate: new Date("1972-07-01T04:00:00.000Z")
		},
		{
			_id:"",
			model:"Accord",
			manufacturer:"0",
			vehicleType:[
				VehicleType.sedan,
				VehicleType.hatchback,
				VehicleType.coupe,
				VehicleType.stationWagon
			],
			releaseDate: new Date("1976-07-01T04:00:00.000Z")
		},
		{
			_id:"",
			model:"CR-V",
			manufacturer:"0",
			vehicleType:[
				VehicleType.crossover
			],
			releaseDate: new Date("1995-07-01T04:00:00.000Z")
		},
		{
			_id:"",
			model:"300",
			manufacturer:"1",
			vehicleType:[
				VehicleType.luxuryCar
			],
			releaseDate: new Date("2005-07-01T04:00:00.000Z")
		},
		{
			_id:"",
			model:"Crossfire",
			manufacturer:"1",
			vehicleType:[
				VehicleType.coupe
			],
			releaseDate: new Date("2008-07-01T04:00:00.000Z")
		},
		{
			_id:"",
			model:"Airflow",
			manufacturer:"1",
			vehicleType:[
				VehicleType.luxuryCar
			],
			releaseDate: new Date("1972-07-01T04:00:00.000Z")
		},
		{
			_id:"",
			model:"Model T",
			manufacturer:"2",
			vehicleType:[
				VehicleType.sedan
			],
			releaseDate: new Date("1908-07-01T04:00:00.000Z")
		},
		{
			_id:"",
			model:"Mustang",
			manufacturer:"2",
			vehicleType:[
				VehicleType.coupe
			],
			releaseDate: new Date("1964-07-01T04:00:00.000Z")
		},
		{
			_id:"",
			model:"Ranger",
			manufacturer:"2",
			vehicleType:[
				VehicleType.pickupTruck
			],
			releaseDate: new Date("1982-07-01T04:00:00.000Z")
		}
	]
}