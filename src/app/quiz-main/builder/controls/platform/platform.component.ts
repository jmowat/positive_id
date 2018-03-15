import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../../../vehicle';

@Component({
  selector: 'app-platform-control',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
  vehicles: Vehicle[];
  platforms = {
    availableOptions: [{
      id: 'ground vehicle',
      name: 'Ground Vehicles'
    }, {
      id: 'fixed wing aircraft',
      name: 'Fixed Wing Aircraft'
    }, {
      id: 'rotary wing aircraft',
      name: 'Rotary Wing Aircraft'
    }],
    selectedOption: {
      id: 'ground vehicle',
      name: 'Ground Vehicles'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
