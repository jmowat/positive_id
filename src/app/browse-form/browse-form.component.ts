import { Component, OnInit, EventEmitter } from '@angular/core';
import { VehicleService }  from '../vehicle.service';
import { Vehicle }  from '../vehicle';
import { BrowseModel } from '../browse-model'

@Component({
  selector: 'app-browse-form',
  templateUrl: './browse-form.component.html',
  styleUrls: ['./browse-form.component.css']
})
export class BrowseFormComponent implements OnInit {
	vehicles: Vehicle[];
	errorMessage: string;

	model = new BrowseModel("Aircraft");

	platforms = ["Ground Vehicle", "Aircraft"];
	sides = ["Axis", "Allies", "NATO", "western", "Warsaw Pact", "eastern"];
	eras = ["modern", "cold war", "world war ii"];

 	constructor(private vehicleService: VehicleService) { }

	ngOnInit() {
		this.getVehicles();
	}

	diagnostic() {
		return JSON.stringify(this.model);
	}

	getNumberOfItems() : number {
		if(this.vehicles) {
			return this.vehicles.length;
		} else {
			return 0;
		}
	}

	testFilter() {
		//console.log("execute testFilter in browse-form component.");
		this.vehicleService.filter(this.model);
	}

	reset() {
		this.vehicleService.reset();
		this.model = new BrowseModel("Ground Vehicles");
	}

	getVehicles() {
		this.vehicleService.getVehicles()
            .subscribe(vehicles => {
            	this.vehicles = vehicles;
            },
            error => this.errorMessage = <any>error);
	}

}
