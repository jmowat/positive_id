import { Component, OnInit } from '@angular/core';
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

	filter() {
		 // console.log(this.vehicles ? `In filter, vehicles[] has ${this.vehicles.length} items`: "In filter, vehicles undefined");
		 this.vehicles = this.vehicles.filter(x => x.type == "aircraft");
		 // console.log(this.vehicles ? `Filtered vehicles[] has ${this.vehicles.length} items`: "In filter, vehicles still undefined");
	}

	reset() {
		this.getVehicles();
	}

	getVehicles() {
		this.vehicleService.getVehicles()
            .subscribe(x => {
            	this.vehicles = x;
            	//console.log(`Fetched ${x.length} vehicles in browse-form`);
            },
            error => this.errorMessage = <any>error);
	}

}
