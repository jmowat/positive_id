import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../../../../vehicle';
import { FilterHelper } from '../../../../filter-helper';
import { GrammarHelper } from '../../../grammar-helper';

@Component({
  selector: 'app-side-control',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  _vehicles: Vehicle[];
  sides = {
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
      const types = FilterHelper.getSides(this._vehicles);
      for (const type of types) {
        this.sides.availableOptions.push({id: type, name: GrammarHelper.toTitleCase(type)});
      }
      this.sides.availableOptions.unshift({id: '', name: 'Any'});
      // select the default
      this.sides.selectedOption = {id: '', name: 'Any'};
    }
  }

  get vehicles(): Vehicle[] {
    return this._vehicles;
  }
}
