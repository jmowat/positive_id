import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VehicleService } from '../../../vehicle.service';
import { WizardService } from '../wizard.service';
import { Vehicle } from '../../../vehicle';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
  vehicles: Vehicle[];
  platforms = {
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
    } // This sets the default value of the select in the ui
  };

  constructor(private router: Router, private location: Location, private vehicleService: VehicleService,
    private wizardService: WizardService) { }

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe((data) => {
      this.vehicles = data;
    });
  }

  next() {
      this.wizardService.platform = this.platforms.selectedOption.id;
      this.wizardService.setData(WizardService
        .filter(this.vehicles, 'type', this.platforms.selectedOption.id));
      this.router.navigateByUrl('/era');
  }

  back() {
    this.location.back();
  }

}
