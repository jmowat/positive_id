import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { WizardService } from '../wizard.service';
import { Vehicle } from '../../../vehicle';
import { FilterHelper } from '../../../filter-helper';
import { GrammarHelper } from '../../grammar-helper';

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

  constructor(private router: Router, private location: Location, private wizardService: WizardService) { }

  ngOnInit() {
    this.vehicles = this.wizardService.getData();
  }

  next() {
    this.wizardService.side = this.sides.selectedOption.id;

    this.wizardService.setData(
      this.sides.selectedOption.id ?
        WizardService.filter(this.vehicles, 'side', this.sides.selectedOption.id) :
        this.vehicles);
    this.router.navigateByUrl('/distance');
  }

  back() {
    this.wizardService.resetLastDataFromHistory();
    this.location.back();
  }

  getSides(): any {
    const sides = FilterHelper.getSides(this.vehicles);
    this.sides.availableOptions = [];
    for (const side of sides) {
      this.sides.availableOptions.push({ id: side, name: GrammarHelper.toTitleCase(side) });
    }
    this.sides.availableOptions.sort((a, b) => a.name.localeCompare(b.name));
    this.sides.availableOptions.unshift({ id: '', name: 'Any' });
    return this.sides;
  }
}
