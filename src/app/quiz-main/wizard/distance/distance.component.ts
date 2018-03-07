import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { WizardService } from '../wizard.service';
import { Vehicle } from '../../../vehicle';
import { FilterHelper } from '../../../filter-helper';
import { GrammarHelper } from '../../grammar-helper';
import { QuizParmDisplayComponent } from '../quiz-parm-display/quiz-parm-display.component';
import { QuizParms } from '../../quiz-parms';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent implements OnInit {
  vehicles: Vehicle[];

  distances = {
    availableOptions: []
  };

  constructor(private router: Router, private location: Location, private wizardService: WizardService) { }

  ngOnInit() {
    this.vehicles = this.wizardService.getData();
  }

  next() {
    // filter images based on distance selection
    // this.wizardService.distance = this.distances.selectedOption.id;
    this.wizardService.setData(this.wizardService.distances.selectedOption.id ?
      WizardService.filterImages(this.vehicles, 'distance', this.wizardService.distances.selectedOption.id) :
      this.vehicles);
    this.router.navigateByUrl('/optics');
  }

  back() {
    this.wizardService.resetLastDataFromHistory();
    this.location.back();
  }

  getDistances(): any {
    const distances = FilterHelper.getDistances(this.vehicles);
    this.distances.availableOptions = [];
    for (const distance of distances) {
      this.distances.availableOptions.push({ id: distance, name: GrammarHelper.toTitleCase(distance) });
    }
    this.distances.availableOptions.sort((a, b) => a.name.localeCompare(b.name));
    this.distances.availableOptions.unshift({ id: '', name: 'Any' });
    return this.distances;
  }
}
