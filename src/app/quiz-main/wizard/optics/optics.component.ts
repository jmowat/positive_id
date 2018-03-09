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
  selector: 'app-optics',
  templateUrl: './optics.component.html',
  styleUrls: ['./optics.component.css']
})
export class OpticsComponent implements OnInit {
  vehicles: Vehicle[];

  optics = {
    availableOptions: []
  };

  constructor(private router: Router, private location: Location,
    private wizardService: WizardService, private stateService: GameBuilderStateService) { }

  ngOnInit() {
    this.vehicles = this.wizardService.getData();
    // reset user selection if it is no longer in the list
    if (this.wizardService.eras.selectedOption.id &&
      !this.getOptics().availableOptions.map(v => v.id).includes(this.wizardService.optics.selectedOption.id)) {
      this.wizardService.optics.selectedOption.id = '';
    }
  }

  next() {
    // filter images based on optics selection
    // this.wizardService.optics = this.optics.selectedOption.id;
    this.wizardService.setData(this.wizardService.optics.selectedOption.id ?
      WizardService.filterImages(this.vehicles, 'optics', this.wizardService.optics.selectedOption.id) :
      this.vehicles);
      this.stateService.next();
    // this.router.navigateByUrl('/perspectives');
  }

  back() {
    this.wizardService.resetLastDataFromHistory();
    // this.location.back();
    this.stateService.previous();
  }

  getOptics(): any {
    const optics = FilterHelper.getOptics(this.vehicles);
    this.optics.availableOptions = [];
    for (const optic of optics) {
      this.optics.availableOptions.push({id: optic, name: GrammarHelper.toTitleCase(optic)});
    }
    this.optics.availableOptions.sort((a, b) => a.name.localeCompare(b.name));
    this.optics.availableOptions.unshift({id: '', name: 'Any'});
    return this.optics;
  }
}
