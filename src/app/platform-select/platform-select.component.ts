import { Component, OnInit } from '@angular/core';

import { VehicleService }  from '../vehicle.service';
import { Vehicle }  from '../vehicle';

@Component({
  selector: 'app-platform-select',
  templateUrl: './platform-select.component.html',
  styleUrls: ['./platform-select.component.css']
})
export class PlatformSelectComponent implements OnInit {

  vehicles: Vehicle[];
	errorMessage: string;

  constructor(private vehicleService: VehicleService) { }

	ngOnInit() {
		this.vehicleService.getVehicles()
			//.map((x) => x.type)
            .subscribe(vehicles => this.vehicles = vehicles,
                       error => this.errorMessage = <any>error);
	}

}
