import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../../../vehicle';

@Component({
  selector: 'app-vehicle-selection-control',
  templateUrl: './vehicle-selection.component.html',
  styleUrls: ['./vehicle-selection.component.css']
})
export class VehicleSelectionComponent implements OnInit {
  vehicles: Vehicle[];
  vehicleSelections = {
    availableOptions: [
      {
        id: '',
        name: ''
      }
    ],
    selectedOption: {
      id: '',
      name: ''
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
