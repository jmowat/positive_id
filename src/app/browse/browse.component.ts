import { Component, OnInit } from '@angular/core';

import { VehicleService }  from '../vehicle.service';
import { Vehicle }  from '../vehicle';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
	vehicles: Vehicle[];
  constructor(private vehicleService: VehicleService) { }

	ngOnInit() {
		this.showVehicles();
	}

	showVehicles() {
	  	this.vehicleService.getVehicles()
	    	.subscribe(data => this.vehicles = data);
	}
}
