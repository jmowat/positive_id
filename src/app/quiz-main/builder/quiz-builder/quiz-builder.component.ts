import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../vehicle.service';
import { Vehicle } from '../../../vehicle';
import { GrammarHelper } from '../../grammar-helper';

@Component({
  selector: 'app-quiz-builder',
  templateUrl: './quiz-builder.component.html',
  styleUrls: ['./quiz-builder.component.css']
})
export class QuizBuilderComponent implements OnInit {
  vehicles: Vehicle[];
  platforms = {
    availableOptions: [{
      id: 'ground vehicle',
      name: 'Ground Vehicles'
    }, {
      id: 'fixed wing aircraft',
      name: 'Fixed Wing Aircraft'
    }],
    selectedOption: {
      id: 'ground vehicle',
      name: 'Ground Vehicles'
    }
  };

  constructor() { }

  ngOnInit() {
  }

  next() {

  }

}
