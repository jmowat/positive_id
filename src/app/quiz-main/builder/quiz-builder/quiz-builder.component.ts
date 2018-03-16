import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../vehicle.service';
import { QuizService } from '../../../quiz-main/quiz/quiz.service';
import { Router } from '@angular/router';

import { Vehicle } from '../../../vehicle';
import { FilterHelper } from '../../../filter-helper';
import { GrammarHelper } from '../../grammar-helper';
import { GameParmsService } from '../../game/game-parms.service';
import { QuizParms } from '../../game/quiz-parms';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-quiz-builder',
  templateUrl: './quiz-builder.component.html',
  styleUrls: ['./quiz-builder.component.css']
})
export class QuizBuilderComponent implements OnInit {
  vehicles: Vehicle[];
  myOptions: IMultiSelectOption[];
  optionsModel: string[];

  mySettings: IMultiSelectSettings = {
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true,
    showCheckAll: true,
    showUncheckAll: true,
    containerClasses: 'test'
  };


  platforms = {
    availableOptions: [],
    selectedOption: { id: '', name: '' }
  };

  eras = {
    availableOptions: [],
    selectedOption: {
      id: '',
      name: ''
    }
  };

  sides = {
    availableOptions: [],
    selectedOption: {
      id: '',
      name: ''
    }
  };

  optics = {
    availableOptions: [],
    selectedOption: {
      id: '',
      name: ''
    }
  };

  distances = {
    availableOptions: [],
    selectedOption: {
      id: '',
      name: ''
    }
  };

  perspectives = {
    availableOptions: [],
    selectedOptions: []
  };

  maxQuestions = 20;

  constructor(private vehicleService: VehicleService, private gameParmsService: GameParmsService,
    private router: Router) { }

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data;
      this.populatePlatforms(this.vehicles);
      this.vehicles = this.vehicles.filter(v => v.type === this.platforms.selectedOption.id);
      this.refreshSelectBoxes();
    });
  }

  refreshSelectBoxes() {
    this.populateEras(this.vehicles);
    this.populateSides(this.vehicles);
    this.populateDistances(this.vehicles);
    this.populateOptics(this.vehicles);
    this.populatePerspectives(this.vehicles);
    this.maxQuestions = this.vehicles.length;
  }

  next() {
    console.log(this.getQuizParms());
    this.gameParmsService.setTestParms(this.getQuizParms());
    this.router.navigateByUrl('/quiz');
  }

  onMultiChange() {
    console.log(this.optionsModel);
  }

  getQuizParms(): QuizParms {
    const parms: QuizParms = {
      platforms: [this.platforms.selectedOption.id],
      optionsToShow: 5,
      randomizeQuestions: true,
      numberOfQuestions: this.maxQuestions
    };

    if (this.eras.selectedOption.id) { parms.eras = [this.eras.selectedOption.id]; }
    if (this.distances.selectedOption.id) { parms.distances = [this.distances.selectedOption.id]; }
    if (this.optics.selectedOption.id) { parms.optics = [this.optics.selectedOption.id]; }
    if (this.sides.selectedOption.id) { parms.sides = [this.sides.selectedOption.id]; }

    // delete blank entries from perspectives
    const perspectives = this.perspectives.selectedOptions.filter(v => v.id !== '' && v !== '');
    if (perspectives.length > 0) {
      parms.profiles = perspectives;
    } else {
      delete parms.profiles;
    }
    return parms;
  }

  onPlatformChange(newValue) {
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data;
      this.vehicles = this.vehicles.filter(v => v.type === this.platforms.selectedOption.id);
      this.refreshSelectBoxes();
    });
  }

  onEraChange(newValue) {
    if (!this.eras.selectedOption.id) {
      this.populateSides(this.vehicles);
      this.maxQuestions = this.vehicles.length;
    } else {
      const vehiclesByEra = this.vehicles.filter(v => v.era.includes(this.eras.selectedOption.id));
      this.populateSides(vehiclesByEra);
      this.maxQuestions = vehiclesByEra.length;
    }
  }

  onSideChange(newValue) {
    if (!this.sides.selectedOption.id) {
      this.maxQuestions = this.vehicles.filter(v => v.era.includes(this.eras.selectedOption.id)).length;
    } else {
      let vehiclesBySide;
      if (!this.eras.selectedOption.id) {
        vehiclesBySide = this.vehicles.filter(v => v.side.includes(this.sides.selectedOption.id));
      } else {
        vehiclesBySide = this.vehicles.filter(v => v.side.includes(this.sides.selectedOption.id) &&
          v.era.includes(this.eras.selectedOption.id));
      }
      this.maxQuestions = vehiclesBySide.length;
    }
  }

  onDistanceChange(newValue) {
    if (!this.distances.selectedOption.id) {
      this.populateOptics(this.vehicles);
      this.populatePerspectives(this.vehicles);
    } else {
      // distance will influence vehicle images and therefore perspectives
      const vehiclesByDistance = JSON.parse(JSON.stringify(this.vehicles));
      for (const v of vehiclesByDistance) {
        if (!this.optics.selectedOption.id) {
          v.images = v.images.filter(i => i.distance === this.distances.selectedOption.id);
        } else {
          v.images = v.images.filter(i => i.distance === this.distances.selectedOption.id
            && i.optics === this.optics.selectedOption.id);
        }
      }
      this.populatePerspectives(vehiclesByDistance);
    }
  }

  onOpticsChange(newValue) {
    if (!this.optics.selectedOption.id) {
      this.onDistanceChange(this.distances.selectedOption.id);
    } else {
      // optics will influence vehicle images and therefore perspectives
      // May need a deep copy to avoid changing images of this.vehicles by reference
      const vehiclesByOptics = JSON.parse(JSON.stringify(this.vehicles));
      for (const v of vehiclesByOptics) {
        if (this.distances.selectedOption.id) {
          // need to filter for both optics and distance if distance present
          v.images = v.images.filter(i =>
            i.optics === this.optics.selectedOption.id &&
            i.distance === this.distances.selectedOption.id
          );
        } else {
          // otherwise, filter purely by optics
          v.images = v.images.filter(i =>
            i.optics === this.optics.selectedOption.id
          );
        }
        // console.log('filtered images on optics change', v.images);
      }
      this.populatePerspectives(vehiclesByOptics);
    }
  }

  populatePlatforms(vehicles: Vehicle[]) {
    if (vehicles) {
      // dynamically populate the available options
      const types = FilterHelper.getTypes(vehicles);
      for (const type of types) {
        this.platforms.availableOptions.push({ id: type, name: GrammarHelper.toTitleCase(type) });
      }
      // select the default
      this.platforms.selectedOption = { id: 'ground vehicle', name: 'ground vehicle' };
    }
  }

  populateEras(vehicles: Vehicle[]) {
    if (vehicles) {
      this.eras.availableOptions = [];
      // dynamically populate the available options
      const types = FilterHelper.getEras(vehicles);
      for (const type of types) {
        this.eras.availableOptions.push({ id: type, name: GrammarHelper.toTitleCase(type) });
      }
      this.eras.availableOptions.sort((a, b) => a.name.localeCompare(b.name));
      this.eras.availableOptions.unshift({ id: '', name: 'Any' });
      // select the default
      this.eras.selectedOption = { id: '', name: 'Any' };
    }
  }

  populateSides(vehicles: Vehicle[]) {
    if (vehicles) {
      this.sides.availableOptions = [];
      // dynamically populate the available options
      const types = FilterHelper.getSides(vehicles);
      for (const type of types) {
        this.sides.availableOptions.push({ id: type, name: GrammarHelper.toTitleCase(type) });
      }
      this.sides.availableOptions.sort((a, b) => a.name.localeCompare(b.name));
      this.sides.availableOptions.unshift({ id: '', name: 'Any' });
      // select the default
      this.sides.selectedOption = { id: '', name: 'Any' };
    }
  }

  populateDistances(vehicles: Vehicle[]) {
    if (vehicles) {
      this.distances.availableOptions = [];
      // dynamically populate the available options
      const types = FilterHelper.getDistances(vehicles);
      for (const type of types) {
        this.distances.availableOptions.push({ id: type, name: GrammarHelper.toTitleCase(type) });
      }
      this.distances.availableOptions.sort((a, b) => a.name.localeCompare(b.name));
      this.distances.availableOptions.unshift({ id: '', name: 'Any' });
      // select the default
      this.distances.selectedOption = { id: '', name: 'Any' };
    }
  }

  populatePerspectives(vehicles: Vehicle[]) {
    if (vehicles) {
      this.perspectives.availableOptions = [];
      this.perspectives.selectedOptions = [];
      // dynamically populate the available options
      const types = FilterHelper.getPerspectives(vehicles);
      for (const type of types) {
        this.perspectives.availableOptions.push({ id: type, name: GrammarHelper.toTitleCase(type) });
      }
      this.perspectives.availableOptions.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  populateOptics(vehicles: Vehicle[]) {
    if (vehicles) {
      this.optics.availableOptions = [];
      // dynamically populate the available options
      const types = FilterHelper.getOptics(vehicles);
      for (const type of types) {
        this.optics.availableOptions.push({ id: type, name: GrammarHelper.toTitleCase(type) });
      }
      this.optics.availableOptions.sort((a, b) => a.name.localeCompare(b.name));
      this.optics.availableOptions.unshift({ id: '', name: 'Any' });
      // select the default
      this.optics.selectedOption = { id: '', name: 'Any' };
    }
  }
}
