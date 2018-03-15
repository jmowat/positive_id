import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../../../vehicle';

@Component({
  selector: 'app-perspectives-control',
  templateUrl: './perspectives.component.html',
  styleUrls: ['./perspectives.component.css']
})
export class PerspectivesComponent implements OnInit {
  vehicles: Vehicle[];

  perspectives = {
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
