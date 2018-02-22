import { Component, OnInit } from '@angular/core';
import { VehicleService }  from '../vehicle.service';
import { Vehicle }  from '../vehicle';
import { FilterHelper }  from '../filter-helper';
import { BrowseModel } from '../browse-model'
import { SelectBoxFactory } from '../select-box-factory'

@Component({
  selector: 'app-browse-form',
  templateUrl: './browse-form.component.html',
  styleUrls: ['./browse-form.component.css']
})
export class BrowseFormComponent implements OnInit {
	vehicles: Vehicle[];
	originalVehicles: Vehicle[];

	errorMessage: string;

	model: BrowseModel = new BrowseModel();

	platforms =	{
	    availableOptions: [{
	      id: 'ground vehicle',
	      name: 'Ground Vehicles'
	    }, {
	      id: 'aircraft',
	      name: 'Aircraft'
	    }],
	    selectedOption: {
	      id: 'ground vehicle',
	      name: 'Ground Vehicles'
	    } //This sets the default value of the select in the ui
	  };

	// Populated with data from vehicles list
	sides = {availableOptions: [],
			selectedOption: {id:""}};
	eras = {availableOptions: [],
			selectedOption: {id:""}};

 	constructor(private vehicleService: VehicleService) { }

	ngOnInit() {
		this.getVehicles();
	}

	filter() {
		//let constraint = {type:'aircraft',era:'world war ii',side:'Allies'};
		this.vehicles = this.originalVehicles;
		let constraint = {type: "",
						  era: "",
						  side: ""};
		let filterHelper = new FilterHelper(this.vehicles);
		console.log(this.platforms.selectedOption.id);
		if(this.platforms.selectedOption.id ) {
			constraint.type = this.platforms.selectedOption.id;
		}
		if(this.eras.selectedOption.id ) {
			constraint.era = this.eras.selectedOption.id;
		}
		if(this.sides.selectedOption.id ) {
			constraint.side = this.sides.selectedOption.id;
		}
		console.log(constraint);
		this.vehicles = filterHelper.filter(constraint);
	}

	reset() {
		this.getVehicles();
		this.filter();
	}

	getVehicles() {
		this.vehicleService.getVehicles()
            .subscribe(x => {
            	this.vehicles = x;
            	this.originalVehicles = x;
				this.afterDataLoad();
            },
            error => this.errorMessage = <any>error);
	}

	afterDataLoad() {
		this.vehicles.sort(function(a:Vehicle, b:Vehicle) {
				    return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
		});

		let filterHelper = new FilterHelper(this.vehicles);
		this.sides = SelectBoxFactory.createSelectBoxOptions("Any Side", filterHelper.getSides());
		this.eras = SelectBoxFactory.createSelectBoxOptions("Any Era", filterHelper.getEras());
		this.filter();
	}
}
