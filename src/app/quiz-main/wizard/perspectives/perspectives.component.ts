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
  selector: 'app-perspectives',
  templateUrl: './perspectives.component.html',
  styleUrls: ['./perspectives.component.css']
})
export class PerspectivesComponent implements OnInit {
  vehicles: Vehicle[];

  perspectives = {
    availableOptions: []
  };

  constructor(private router: Router, private location: Location, private wizardService: WizardService,
  private stateService: GameBuilderStateService) { }

  ngOnInit() {
    this.vehicles = this.wizardService.getData();
    // reset user selection if it is no longer in the list
    const cleanSelections = [];
    for (const selection of this.wizardService.perspectives.selectedOption) {
      if (this.getPerspectives().availableOptions.map(v => v.id).includes(selection)) {
        cleanSelections.push(selection);
      }
    }
    this.wizardService.perspectives.selectedOption = cleanSelections;
  }

  next() {
    // not a filter criteria, but rather a display attribute
    // this.wizardService.perspectives = this.perspectives.selectedOption;
    this.wizardService.setData(this.vehicles);
    // this.router.navigateByUrl('/summary');
    this.stateService.next();
  }

  back() {
    this.wizardService.resetLastDataFromHistory();
    // this.location.back();
    this.stateService.previous();
  }

  getPerspectives() {
    const perspectives = FilterHelper.getPerspectives(this.vehicles);
    this.perspectives.availableOptions = [];
    for (const perspective of perspectives) {
      this.perspectives.availableOptions.push({ id: perspective, name: GrammarHelper.toTitleCase(perspective) });
    }
    this.perspectives.availableOptions.sort((a, b) => a.name.localeCompare(b.name));
    return this.perspectives;
  }
}
