import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../../../vehicle';

@Component({
  selector: 'app-optics-control',
  templateUrl: './optics.component.html',
  styleUrls: ['./optics.component.css']
})
export class OpticsComponent implements OnInit {
  vehicles: Vehicle[];
  optics = {
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
