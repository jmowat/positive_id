import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../../../vehicle';

@Component({
  selector: 'app-distance-control',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent implements OnInit {
  vehicles: Vehicle[];
  distances = {
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
