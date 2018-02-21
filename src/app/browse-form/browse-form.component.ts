import { Component, OnInit } from '@angular/core';
import { VehicleService }  from '../vehicle.service';
import { Vehicle }  from '../vehicle';

@Component({
  selector: 'app-browse-form',
  templateUrl: './browse-form.component.html',
  styleUrls: ['./browse-form.component.css']
})
export class BrowseFormComponent implements OnInit {
	vehicles: Vehicle[];
	errorMessage: string;
 	constructor(private vehicleService: VehicleService) { }

	ngOnInit() {
		this.vehicleService.getVehicles()
            .subscribe(vehicles => this.vehicles = vehicles,
                       error => this.errorMessage = <any>error);
	}

	getNumberOfItems() : number {
		if(this.vehicles) {
			return this.vehicles.length;
		} else {
			return 0;
		}
	}
}
