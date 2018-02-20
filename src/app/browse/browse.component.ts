import { Component, OnInit } from '@angular/core';

import { VehicleService }  from '../vehicle.service';
import { Vehicle }  from '../vehicle';
import { PaginationComponent } from '../pagination/pagination.component';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
   providers: [NgbPaginationConfig] // add NgbPaginationConfig to the component providers
})
export class BrowseComponent implements OnInit {
	vehicles: Vehicle[];
	errorMessage: string;
	page = 1;

  constructor(private vehicleService: VehicleService, config: NgbPaginationConfig) {
	// customize default values of paginations used by this component tree
    config.pageSize = 6;
   }


	ngOnInit() {
		/*
		 * This grabs the entire array and it can't seem to be processed in a map as individual vehicle items
		 */
		this.vehicleService.getVehicles()
            .subscribe(vehicles => this.vehicles = vehicles,
                       error => this.errorMessage = <any>error);
        // this.vehicles is also a promise that may not have returned by this point
        //console.log(this.vehicles);
	}


	getNumberOfItems() : number {
		if(this.vehicles) {
			return this.vehicles.length;
		} else {
			return 0;
		}
	}

	getNumberOfItemsToShow() : number {
			return 6;
	}

}
