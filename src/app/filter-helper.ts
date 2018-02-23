import { Vehicle } from './vehicle';

export class FilterHelper {

	constructor(private vehicles: Vehicle[]) {}

	static getTypes(vehicles: Vehicle[]): string[] {
		return this.isolateAttribute("type",vehicles);
	}

	static getEras(vehicles: Vehicle[]): string[] {
		return this.isolateAttribute("era",vehicles);
	}

	static getSides(vehicles: Vehicle[]): string[] {
		return this.isolateAttribute("side",vehicles);
	}

	static getPerspectives(vehicles: Vehicle[]): string[] {
		return this.isolateImageAttribute("perspective",vehicles);
	}

	static getDistances(vehicles: Vehicle[]): string[] {
		return this.isolateImageAttribute("distance",vehicles);
	}

	static getOptics(vehicles: Vehicle[]): string[] {
		return this.isolateImageAttribute("optics",vehicles);
	}

	private static isolateAttribute(attr: string, vehicles: Vehicle[]) : string[] {
		return Array.from(new Set([].concat(...(vehicles.map(x => x[attr])))));
	}

	private static isolateImageAttribute(attr: string, vehicles: Vehicle[]) : string[] {
		let attrs = [];
		for(let vehicle of vehicles) {
			attrs.push(vehicle.images.map(x => x[attr]));
		}
		return Array.from(new Set([].concat(...(attrs))));
	}

	/*
	 * constraint: an object of key-value pairs representing the attributes to filter by.
	 * E.g. {type:'aircraft',era:'world war ii',side:'Allies'}
	 */
	static filter(constraint, vehicles: Vehicle[]): Vehicle[] {
		console.log("constraint in filter:",constraint);
		let filteredVehicles: Vehicle[] = [];

		let filterTest = x => {
			console.log(x.name, "x.side",  x.side, "constraint.side", constraint.side);
			console.log("x.side.includes(constraint.side)",  x.side.includes(constraint.side));
			return x.type == constraint.type && (constraint.side ? x.side.includes(constraint.side) : true) && (constraint.era ? x.era.includes(constraint.era) : true);
		}

		filteredVehicles = vehicles.filter(filterTest);

		return filteredVehicles;
	}
}
