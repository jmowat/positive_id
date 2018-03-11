import { Injectable } from '@angular/core';
import { FilterHelper } from '../../filter-helper';
import { VehicleService } from '../../vehicle.service';
import { Vehicle } from '../../vehicle';
import { QuizParms } from '../game/quiz-parms';

@Injectable()
export class WizardService {
  filteredVehicles: Vehicle[];
  dataHistory: any[] = [];
  platform: string;
  maxQuestions: number;

  platforms = {
    selectedOption: {
      id: 'ground vehicle',
      name: 'Ground Vehicles'
    }
  };

  eras = {
    selectedOption: { id: '' }
  };

  sides = {
    selectedOption: { id: '' }
  };

  distances = {
    selectedOption: { id: '' }
  };

  optics = {
    selectedOption: { id: '' }
  };

  perspectives = {
    selectedOption: []
  };

  vehicleSelections = {
    selectedOption: []
  };

  static filter(vehicles: Vehicle[], type: string, value: string) {
    return vehicles.filter((v: Vehicle) => v[type] === value || v[type].includes(value));
  }

  static filterImages(vehicles: Vehicle[], type: string, value: string) {
    for (const v of vehicles) {
      const filteredImages = v.images.filter((img) => img[type] === value);
      // console.log('filtered images', filteredImages);
      v.images = filteredImages;
    }
    return vehicles;
  }

  constructor(private vehicleService: VehicleService) {

  }

  setData(filteredData: Vehicle[]) {
    this.filteredVehicles = filteredData;
    this.dataHistory.push(JSON.parse(JSON.stringify(filteredData)));
  }

  resetLastDataFromHistory() {
    this.dataHistory.pop();
    // this.filteredVehicles = this.dataHistory[this.dataHistory.length - 1];
    this.filteredVehicles =
      JSON.parse(JSON.stringify(this.dataHistory[this.dataHistory.length - 1]));
  }

  getData() {
    return this.filteredVehicles;
  }

  getStateData(): QuizParms {
    const parms: QuizParms = {
      platforms: [this.platforms.selectedOption.id],
      optionsToShow: 5,
      randomizeQuestions: true,
      numberOfQuestions: this.maxQuestions
    };

    parms.eras = [this.eras.selectedOption.id];
    parms.distances = [this.distances.selectedOption.id];
    parms.optics = [this.optics.selectedOption.id];
    parms.sides = [this.sides.selectedOption.id];
    parms.profiles = this.perspectives.selectedOption;
    parms.originalValues = this.vehicleSelections.selectedOption;
    return parms;
  }

  getQuizParms(): QuizParms {
    const parms: QuizParms = {
      platforms: [this.platforms.selectedOption.id],
      optionsToShow: 5,
      randomizeQuestions: true,
      numberOfQuestions: this.maxQuestions
    };

    this.eras.selectedOption.id ? parms.eras = [this.eras.selectedOption.id] : parms.eras = undefined;
    this.distances.selectedOption.id ? parms.distances = [this.distances.selectedOption.id] : parms.distances = undefined;
    this.optics.selectedOption.id ? parms.optics = [this.optics.selectedOption.id] : parms.optics = undefined;
    this.sides.selectedOption.id ? parms.sides = [this.sides.selectedOption.id] : parms.sides = undefined;
    this.perspectives.selectedOption ? parms.profiles = this.perspectives.selectedOption : parms.profiles = undefined;

    this.vehicleSelections.selectedOption.length > 0 ?
      parms.originalValues = this.vehicleSelections.selectedOption : delete parms.originalValues;

    return parms;
  }

  resetUserSelections() {
    this.platforms = {
      selectedOption: {
        id: 'ground vehicle',
        name: 'Ground Vehicles'
      }
    };

    this.eras = {
      selectedOption: { id: '' }
    };

    this.sides = {
      selectedOption: { id: '' }
    };

    this.distances = {
      selectedOption: { id: '' }
    };

    this.optics = {
      selectedOption: { id: '' }
    };

    this.perspectives = {
      selectedOption: []
    };

    this.vehicleSelections = {
      selectedOption: []
    };
  }
}
