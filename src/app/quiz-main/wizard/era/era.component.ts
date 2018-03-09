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

@Component({
  selector: 'app-era',
  templateUrl: './era.component.html',
  styleUrls: ['./era.component.css']
})
export class EraComponent implements OnInit {
  vehicles: Vehicle[];
  eras = {
    availableOptions: []
  };

  constructor(private router: Router, private location: Location, private wizardService: WizardService,
  private stateService: GameBuilderStateService) { }

  ngOnInit() {
    this.vehicles = this.wizardService.getData();
    // reset user selection if it is no longer in the list
    if (this.wizardService.eras.selectedOption.id &&
      !this.getEras().availableOptions.map(v => v.id).includes(this.wizardService.eras.selectedOption.id)) {
      this.wizardService.eras.selectedOption.id = '';
    }
  }

  next() {
    // this.wizardService.era = this.eras.selectedOption.id;
    this.wizardService.setData(this.wizardService.eras.selectedOption.id ?
      WizardService.filter(this.vehicles, 'era', this.wizardService.eras.selectedOption.id) :
      this.vehicles);
      this.stateService.next();
    // this.router.navigateByUrl('/side');
  }

  back() {
    this.wizardService.resetLastDataFromHistory();
    // this.location.back();
    this.stateService.previous();
  }

  getEras() {
    const eras = FilterHelper.getEras(this.vehicles);
    this.eras.availableOptions = [];
    for (const era of eras) {
      this.eras.availableOptions.push({ id: era, name: GrammarHelper.toTitleCase(era) });
    }
    this.eras.availableOptions.sort((a, b) => a.name.localeCompare(b.name));
    this.eras.availableOptions.unshift({ id: '', name: 'Any' });
    return this.eras;
  }
}
