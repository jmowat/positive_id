import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../../../../vehicle';
import { FilterHelper } from '../../../../filter-helper';
import { GrammarHelper } from '../../../grammar-helper';

@Component({
  selector: 'app-platform-control',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {

  private _vehicles: Vehicle[];

  platforms = {
    availableOptions: [],
    selectedOption: {id: '', name: ''}
  };

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set vehicles(vehicles: Vehicle[]) {
    this._vehicles = vehicles;
    if (this._vehicles) {
      // dynamically populate the available options
      const types = FilterHelper.getTypes(this._vehicles);
      for (const type of types) {
        this.platforms.availableOptions.push({id: type, name: GrammarHelper.toTitleCase(type)});
      }
      // select the default
      this.platforms.selectedOption = {id: 'ground vehicle', name: 'ground vehicle'};
    }
  }

  get vehicles(): Vehicle[] {
    return this._vehicles;
  }

}
