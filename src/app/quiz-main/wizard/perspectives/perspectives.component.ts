import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VehicleService } from '../../../vehicle.service';
import { WizardService } from '../wizard.service';
import { Vehicle } from '../../../vehicle';
import { FilterHelper } from '../../../filter-helper';

@Component({
  selector: 'app-perspectives',
  templateUrl: './perspectives.component.html',
  styleUrls: ['./perspectives.component.css']
})
export class PerspectivesComponent implements OnInit {
  vehicles: Vehicle[];

  perspectives = {
    availableOptions: [],
    selectedOption: []
  };

  constructor(private router: Router, private location: Location, private vehicleService: VehicleService,
    private wizardService: WizardService) { }

  ngOnInit() {
    this.vehicles = this.wizardService.getData();
  }

  next() {
    // not a filter criteria, but rather a display attribute
    this.wizardService.perspectives = this.perspectives.selectedOption;
    this.wizardService.setData(this.vehicles);
    this.router.navigateByUrl('/summary');
  }

  back() {
    this.location.back();
  }

  getPerspectives(): any {
    // TODO: distance will influence which perspectives are available
    const perspectives = FilterHelper.getPerspectives(this.vehicles);
    this.perspectives.availableOptions = [];
    for (const perspective of perspectives) {
      this.perspectives.availableOptions.push({ id: perspective, name: perspective });
    }
    return this.perspectives;
  }
}
