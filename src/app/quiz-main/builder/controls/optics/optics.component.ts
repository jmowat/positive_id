import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../../../../vehicle';
import { FilterHelper } from '../../../../filter-helper';
import { GrammarHelper } from '../../../grammar-helper';

@Component({
  selector: 'app-optics-control',
  templateUrl: './optics.component.html',
  styleUrls: ['./optics.component.css']
})
export class OpticsComponent implements OnInit {
  _vehicles: Vehicle[];
  optics = {
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
      const types = FilterHelper.getOptics(this._vehicles);
      for (const type of types) {
        this.optics.availableOptions.push({id: type, name: GrammarHelper.toTitleCase(type)});
      }
      this.optics.availableOptions.unshift({id: '', name: 'Any'});
      // select the default
      this.optics.selectedOption = {id: '', name: 'Any'};
    }
  }

  get vehicles(): Vehicle[] {
    return this._vehicles;
  }
}
