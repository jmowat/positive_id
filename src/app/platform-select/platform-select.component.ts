import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { VehicleService }  from '../vehicle.service';
import { Vehicle }  from '../vehicle';

@Component({
  selector: 'app-platform-select',
  templateUrl: './platform-select.component.html',
  styleUrls: ['./platform-select.component.css']
})
export class PlatformSelectComponent implements OnInit {
    @Input()
    vehicles: Vehicle[];

    @Output()
    change: EventEmitter<string> = new EventEmitter<string>();


  platforms = {
    availableOptions: [{
      id: 'ground vehicle',
      name: 'Ground Vehicles'
    }, {
      id: 'aircraft',
      name: 'Aircraft'
    }],
    selectedOption: {
      id: 'ground vehicle',
      name: 'Ground Vehicles'
    } //This sets the default value of the select in the ui
  };


  constructor() { }

  ngOnInit() {
    if(this.vehicles) {
  	  console.log("platform-select has ", this.vehicles.length, "vehicles");
    }
  }

  onChange(event) {
    console.log("select changed to", event);
    this.change.emit(event);
  }

}
