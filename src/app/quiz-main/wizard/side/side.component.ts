import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VehicleService } from '../../../vehicle.service';
import { WizardService } from '../wizard.service';
import { Vehicle } from '../../../vehicle';
import { FilterHelper } from '../../../filter-helper';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  vehicles: Vehicle[];
  sides = {
    availableOptions: [],
    selectedOption: { id: '' }
  };

  constructor(private router: Router, private location: Location, private vehicleService: VehicleService,
    private wizardService: WizardService) { }

  ngOnInit() {
    this.vehicles = this.wizardService.getData();
  }

  next() {
    this.wizardService.side = this.sides.selectedOption.id;
    this.wizardService.setData(
      WizardService.filter(this.vehicles, 'side', this.sides.selectedOption.id));
    this.router.navigateByUrl('/distance');
  }

  back() {
    this.location.back();
  }

  getSides(): any {
    const sides = FilterHelper.getSides(this.vehicles);
    this.sides.availableOptions = [];
    for (const side of sides) {
      this.sides.availableOptions.push({ id: side, name: side });
    }
    return this.sides;
  }
}
