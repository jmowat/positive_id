import { Component, OnInit } from '@angular/core';
import { VehicleService }  from '../vehicle.service';
import { Vehicle }  from '../vehicle';
import { FilterHelper }  from '../filter-helper';
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

	filter(constraint) {
		let filterHelper = new FilterHelper(this.vehicles);
		this.vehicles = filterHelper.filter(constraint);
	}

	reset() {
		this.getVehicles();
	}

	getVehicles() {
		this.vehicleService.getVehicles()
            .subscribe(x => {
            	this.vehicles = x;
            	this.vehicles.sort(function(a:Vehicle, b:Vehicle) {
				    return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
				});
            	//console.log(`Fetched ${x.length} vehicles in browse-form`);
            },
            error => this.errorMessage = <any>error);
	}

}
