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
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent implements OnInit {
  vehicles: Vehicle[];

  distances = {
    availableOptions: [],
    selectedOption: { id: '' }
  };

  constructor(private router: Router, private location: Location, private wizardService: WizardService) { }

  ngOnInit() {
    this.vehicles = this.wizardService.getData();
  }

  next() {
    // not a filter criteria, but rather a display attribute
    this.wizardService.distance = this.distances.selectedOption.id;
    this.wizardService.setData(this.vehicles);
    this.router.navigateByUrl('/optics');
  }

  back() {
    this.location.back();
  }

  getDistances(): any {
    const distances = FilterHelper.getDistances(this.vehicles);
    this.distances.availableOptions = [];
    for (const distance of distances) {
      this.distances.availableOptions.push({id: distance, name: distance});
    }
    return this.distances;
  }
}
