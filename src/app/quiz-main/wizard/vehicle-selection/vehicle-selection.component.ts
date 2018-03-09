import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { WizardService } from '../wizard.service';
import { Vehicle } from '../../../vehicle';
import { FilterHelper } from '../../../filter-helper';
import { GrammarHelper } from '../../grammar-helper';
import { QuizParmDisplayComponent } from '../quiz-parm-display/quiz-parm-display.component';
import { QuizParms } from '../../game/quiz-parms';
import { GameBuilderStateService } from '../state/game-builder-state.service';

// TODO: form validation - user must select at least one perspective
@Component({
  selector: 'app-vehicle-selection',
  templateUrl: './vehicle-selection.component.html',
  styleUrls: ['./vehicle-selection.component.css']
})
export class VehicleSelectionComponent implements OnInit {
  vehicles: Vehicle[];

  vehiclesSelection = {
    availableOptions: []
  };

  constructor(private router: Router, private location: Location, private wizardService: WizardService,
  private stateService: GameBuilderStateService) { }

  ngOnInit() {
    this.vehicles = this.wizardService.getData();
    // reset user selection if it is no longer in the list
    const cleanSelections = [];
    for (const selection of this.wizardService.vehicleSelections.selectedOption) {
      if (this.getVehicles().availableOptions.map(v => v.id).includes(selection)) {
        cleanSelections.push(selection);
      }
    }
    this.wizardService.vehicleSelections.selectedOption = cleanSelections;
  }

  next() {
    this.wizardService.setData(this.vehicles);
    this.stateService.next();
  }

  back() {
    this.wizardService.resetLastDataFromHistory();
    this.stateService.previous();
  }

  getVehicles(): any {
    this.vehiclesSelection.availableOptions = [];
    for (const vehicle of this.vehicles) {
      this.vehiclesSelection.availableOptions.push({ id: vehicle.name, name: vehicle.name });
    }
    this.vehiclesSelection.availableOptions.sort((a, b) => a.name.localeCompare(b.name));
    return this.vehiclesSelection;
  }
}
