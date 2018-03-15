import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../../../../vehicle';
import { FilterHelper } from '../../../../filter-helper';
import { GrammarHelper } from '../../../grammar-helper';

@Component({
  selector: 'app-distance-control',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent implements OnInit {
  _vehicles: Vehicle[];
  distances = {
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
      const types = FilterHelper.getDistances(this._vehicles);
      for (const type of types) {
        this.distances.availableOptions.push({id: type, name: GrammarHelper.toTitleCase(type)});
      }
      this.distances.availableOptions.unshift({id: '', name: 'Any'});
      // select the default
      this.distances.selectedOption = {id: '', name: 'Any'};
    }
  }

  get vehicles(): Vehicle[] {
    return this._vehicles;
  }

}
