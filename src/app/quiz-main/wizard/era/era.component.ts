import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { WizardService } from '../wizard.service';
import { Vehicle } from '../../../vehicle';
import { FilterHelper } from '../../../filter-helper';

// TODO: add Any options
// TODO: sort options
// TODO: format options
@Component({
  selector: 'app-era',
  templateUrl: './era.component.html',
  styleUrls: ['./era.component.css']
})
export class EraComponent implements OnInit {
  vehicles: Vehicle[];
  eras = {
    availableOptions: [],
    selectedOption: { id: '' }
  };

  constructor(private router: Router, private location: Location, private wizardService: WizardService) { }

  ngOnInit() {
    this.vehicles = this.wizardService.getData();
  }

  next() {
    this.wizardService.era = this.eras.selectedOption.id;
    this.wizardService.setData(
      WizardService.filter(this.vehicles, 'era', this.eras.selectedOption.id));
    this.router.navigateByUrl('/side');
  }

  back() {
    this.location.back();
  }

  getEras() {
    const eras = FilterHelper.getEras(this.vehicles);
    this.eras.availableOptions = [];
    for (const era of eras) {
      this.eras.availableOptions.push({id: era, name: era});
    }
    return this.eras;
  }
}
