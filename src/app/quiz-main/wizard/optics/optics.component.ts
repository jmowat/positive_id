import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { WizardService } from '../wizard.service';
import { Vehicle } from '../../../vehicle';
import { FilterHelper } from '../../../filter-helper';
import { GrammarHelper } from '../../grammar-helper';

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

  constructor(private router: Router, private location: Location,
    private wizardService: WizardService) { }

  ngOnInit() {
    this.vehicles = this.wizardService.getData();
  }

  next() {
    // filter images based on optics selection
    this.wizardService.optics = this.optics.selectedOption.id;
    this.wizardService.setData(this.optics.selectedOption.id ?
      WizardService.filterImages(this.vehicles, 'optics', this.optics.selectedOption.id) :
      this.vehicles);
    this.router.navigateByUrl('/perspectives');
  }

  back() {
    this.location.back();
  }

  getOptics(): any {
    const optics = FilterHelper.getOptics(this.vehicles);
    this.optics.availableOptions = [];
    for (const optic of optics) {
      this.optics.availableOptions.push({id: optic, name: GrammarHelper.toTitleCase(optic)});
    }
    this.optics.availableOptions.sort((a, b) => a.name.localeCompare(b.name));
    this.optics.availableOptions.unshift({id: '', name: 'Any'});
    return this.optics;
  }
}
