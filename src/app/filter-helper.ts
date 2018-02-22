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

	filter(constraint): Vehicle[] {
		let filteredVehicles: Vehicle[] = [];

		for(let vehicle of this.vehicles) {
			let keep = true;
			for(let key of Object.keys(constraint)) {
				// You have to loop through them all
				if(vehicle[key] != constraint[key]) {
					keep = false;
					break;
				}
			}
			if(keep) {
				filteredVehicles.push(vehicle);
			}
		}

		return filteredVehicles;
	}
}
