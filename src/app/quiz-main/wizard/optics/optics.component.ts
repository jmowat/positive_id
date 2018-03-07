import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VehicleService } from '../../../vehicle.service';
import { WizardService } from '../wizard.service';
import { Vehicle } from '../../../vehicle';
import { FilterHelper } from '../../../filter-helper';

@Component({
  selector: 'app-optics',
  templateUrl: './optics.component.html',
  styleUrls: ['./optics.component.css']
})
export class OpticsComponent implements OnInit {
  vehicles: Vehicle[];

  optics = {
    availableOptions: [],
    selectedOption: { id: '' }
  };

  constructor(private router: Router, private location: Location, private vehicleService: VehicleService,
    private wizardService: WizardService) { }

  ngOnInit() {
    this.vehicles = this.wizardService.getData();
  }

  next() {
    // not a filter criteria, but rather a display attribute
    this.wizardService.optics = this.optics.selectedOption.id;
    this.wizardService.setData(this.vehicles);
    this.router.navigateByUrl('/perspectives');
  }

  back() {
    this.location.back();
  }

  getOptics(): any {
    const optics = FilterHelper.getOptics(this.vehicles);
    this.optics.availableOptions = [];
    for (const optic of optics) {
      this.optics.availableOptions.push({id: optic, name: optic});
    }
    return this.optics;
  }
}
