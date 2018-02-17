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
	errorMessage: string;

  constructor(private vehicleService: VehicleService) { }

	ngOnInit() {
		this.vehicleService.getVehicles()
            .subscribe(vehicles => this.vehicles = vehicles,
                       error => this.errorMessage = <any>error);
	}

}
