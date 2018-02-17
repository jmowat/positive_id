import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VehicleService {

	constructor(private http: HttpClient) { }

	vehiclesUrl = 'assets/vehicles.json';

	getVehicles() {
  		return this.http.get(this.vehiclesUrl);
	}

}
