import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../../../vehicle';

@Component({
  selector: 'app-side-control',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  vehicles: Vehicle[];
  sides = {
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
