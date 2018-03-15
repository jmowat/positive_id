import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../../../../vehicle';
import { FilterHelper } from '../../../../filter-helper';
import { GrammarHelper } from '../../../grammar-helper';

@Component({
  selector: 'app-era-control',
  templateUrl: './era.component.html',
  styleUrls: ['./era.component.css']
})
export class EraComponent implements OnInit {
  _vehicles: Vehicle[];
  eras = {
    availableOptions: [],
    selectedOption: {
      id: '',
      name: ''
    }
  };

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set vehicles(vehicles: Vehicle[]) {
    this._vehicles = vehicles;
    if (this._vehicles) {
      // dynamically populate the available options
      const types = FilterHelper.getEras(this._vehicles);
      for (const type of types) {
        this.eras.availableOptions.push({id: type, name: GrammarHelper.toTitleCase(type)});
      }
      this.eras.availableOptions.unshift({id: '', name: 'Any'});
      // select the default
      this.eras.selectedOption = {id: '', name: 'Any'};
    }
  }

  get vehicles(): Vehicle[] {
    return this._vehicles;
  }
}
