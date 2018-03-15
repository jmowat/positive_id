import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../../../../vehicle';
import { FilterHelper } from '../../../../filter-helper';

@Component({
  selector: 'app-vehicle-selection-control',
  templateUrl: './vehicle-selection.component.html',
  styleUrls: ['./vehicle-selection.component.css']
})
export class VehicleSelectionComponent implements OnInit {
  _vehicles: Vehicle[];
  vehicleSelections = {
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
      for (const vehicle of this._vehicles) {
        this.vehicleSelections.availableOptions.push({id: vehicle.name, name: vehicle.name});
      }
      // this.vehicleSelections.availableOptions.unshift({id: '', name: 'Any'});
      // select the default
      // this.vehicleSelections.selectedOption = {id: '', name: 'Any'};
    }
  }

  get vehicles(): Vehicle[] {
    return this._vehicles;
  }

}
