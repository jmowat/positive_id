import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../../../vehicle';

@Component({
  selector: 'app-era-control',
  templateUrl: './era.component.html',
  styleUrls: ['./era.component.css']
})
export class EraComponent implements OnInit {
  vehicles: Vehicle[];
  eras = {
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
