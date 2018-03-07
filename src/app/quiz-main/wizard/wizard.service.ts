import { Injectable } from '@angular/core';
import { FilterHelper } from '../../filter-helper';
import { VehicleService } from '../../vehicle.service';
import { Vehicle } from '../../vehicle';
import { QuizParms } from '../quiz-parms';

// TODO: get back functionality working
@Injectable()
export class WizardService {
  filteredVehicles: Vehicle[];

  platform: string;
  era: string;
  side: string;
  distance: string;
  optics: string;
  perspectives: string[];
  maxQuestions: number;

  static filter(vehicles: Vehicle[], type: string, value: string) {
    return vehicles.filter((v: Vehicle) => v[type] === value || v[type].includes(value));
  }

  constructor(private vehicleService: VehicleService) {

  }

  setData(filteredData: Vehicle[]) {
    this.filteredVehicles = filteredData;
  }

  getData() {
    return this.filteredVehicles;
  }

  getQuizParms(): QuizParms {
    return {
      platforms: [this.platform],
      eras: [this.era],
      sides: [this.side],
      distances: [this.distance],
      optics: [this.optics],
      profiles: this.perspectives,
      numberOfQuestions: this.maxQuestions,
      optionsToShow: 5,
      randomizeQuestions: true
    };
  }
}
