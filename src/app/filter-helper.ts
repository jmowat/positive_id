import { Vehicle } from './vehicle';

export class FilterHelper {

	constructor(private vehicles: Vehicle[]) {}

	getTypes(): string[] {
		return this.isolateAttribute("type");
	}

	getEras(): string[] {
		return this.isolateAttribute("era");
	}

	getSides(): string[] {
		return this.isolateAttribute("side");
	}

	getPerspectives(): string[] {
		return this.isolateImageAttribute("perspective");
	}

	getDistances(): string[] {
		return this.isolateImageAttribute("distance");
	}

	getOptics(): string[] {
		return this.isolateImageAttribute("optics");
	}

	private isolateAttribute(attr: string) : string[] {
		return Array.from(new Set([].concat(...(this.vehicles.map(x => x[attr])))));
	}

	private isolateImageAttribute(attr: string) : string[] {
		let attrs = [];
		for(let vehicle of this.vehicles) {
			attrs.push(vehicle.images.map(x => x[attr]));
		}
		return Array.from(new Set([].concat(...(attrs))));
	}

	/*
	 * constraint: an object of key-value pairs representing the attributes to filter by.
	 * E.g. {type:'aircraft',era:'world war ii',side:'Allies'}
	 */
	filter(constraint): Vehicle[] {
		console.log("constraint in filter:",constraint);
		let filteredVehicles: Vehicle[] = [];

		let filterTest = x => {
			// console.log(x.name + " x.type == constraint.type", x.type == constraint.type);
			// console.log(" constraint.side ? x.side.includes(constraint.side): true", constraint.side ? x.side.includes(constraint.side): true);
			// console.log(" constraint.era ? x.era.includes(constraint.era): true", constraint.era ? x.era.includes(constraint.era): true);
			// console.log(x.name, x.type, "=", (constraint.type, x.type == constraint.type &&
			// constraint.side ? x.side.includes(constraint.side): true &&
			// constraint.era ? x.era.includes(constraint.era): true));
			console.log(x.name, "x.side",  x.side, "constraint.side", constraint.side);
			console.log("x.side.includes(constraint.side)",  x.side.includes(constraint.side));
			return x.type == constraint.type && (constraint.side ? x.side.includes(constraint.side) : true) && (constraint.era ? x.era.includes(constraint.era) : true);
		}

		filteredVehicles = this.vehicles.filter(filterTest);

		// for(let vehicle of this.vehicles) {
		// 	let keep = true;
		// 	for(let key of Object.keys(constraint)) {
		// 		// You have to loop through them all
		// 		console.log("vehicle[key]:",key,vehicle[key]);

		// 		if( constraint[key] && vehicle[key] != constraint[key]) {
		// 			keep = false;
		// 			break;
		// 		}
		// 	}
		// 	if(keep) {
		// 		filteredVehicles.push(vehicle);
		// 	}
		// }

		return filteredVehicles;
	}
}
