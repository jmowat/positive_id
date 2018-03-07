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

  static filterImages(vehicles: Vehicle[], type: string, value: string) {
    for (const v of vehicles) {
      const filteredImages = v.images.filter((img) => img[type] === value);
      console.log('filtered images', filteredImages);
      v.images = filteredImages;
    }
    return vehicles;
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
    const parms: QuizParms = {
      platforms: [this.platform],
      optionsToShow: 5,
      randomizeQuestions: true,
      numberOfQuestions: this.maxQuestions
    };

    parms.numberOfQuestions = this.maxQuestions;

    this.era ? parms.eras = [this.era] : parms.eras = undefined;
    this.distance ? parms.distances = [this.distance] : parms.distances = undefined;
    this.optics ? parms.optics = [this.optics] : parms.optics = undefined;
    this.side ? parms.sides = [this.side] : parms.sides = undefined;
    this.perspectives ? parms.profiles = this.perspectives : parms.profiles = undefined;
    return parms;
  }
}
