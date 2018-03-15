import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../../../../vehicle';
import { FilterHelper } from '../../../../filter-helper';
import { GrammarHelper } from '../../../grammar-helper';

@Component({
  selector: 'app-perspectives-control',
  templateUrl: './perspectives.component.html',
  styleUrls: ['./perspectives.component.css']
})
export class PerspectivesComponent implements OnInit {
  _vehicles: Vehicle[];
  perspectives = {
    availableOptions: [],
    selectedOptions: []
  };

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set vehicles(vehicles: Vehicle[]) {
    this._vehicles = vehicles;
    if (this._vehicles) {
      // dynamically populate the available options
      const types = FilterHelper.getPerspectives(this._vehicles);
      for (const type of types) {
        this.perspectives.availableOptions.push({id: type, name: GrammarHelper.toTitleCase(type)});
      }
      this.perspectives.availableOptions.unshift({id: '', name: 'Any'});
      // select the default
      this.perspectives.selectedOptions.push({id: '', name: 'Any'});
    }
  }

  get vehicles(): Vehicle[] {
    return this._vehicles;
  }

}
