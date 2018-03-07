import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { WizardService } from '../wizard.service';
import { Vehicle } from '../../../vehicle';
import { FilterHelper } from '../../../filter-helper';
import { GrammarHelper } from '../../grammar-helper';

// TODO: form validation - user must select at least one perspective
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

  constructor(private router: Router, private location: Location, private wizardService: WizardService) { }

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
    const perspectives = FilterHelper.getPerspectives(this.vehicles);
    this.perspectives.availableOptions = [];
    for (const perspective of perspectives) {
      this.perspectives.availableOptions.push({ id: perspective, name: GrammarHelper.toTitleCase(perspective) });
    }
    this.perspectives.availableOptions.sort((a, b) => a.name.localeCompare(b.name));
    return this.perspectives;
  }
}
