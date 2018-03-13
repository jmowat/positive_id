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
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  vehicles: Vehicle[];
  sides = {
    availableOptions: []
  };

  constructor(private router: Router, private location: Location, public wizardService: WizardService,
  public stateService: GameBuilderStateService) { }

  ngOnInit() {
    this.vehicles = this.wizardService.getData();
    // reset user selection if it is no longer in the list
    if (this.wizardService.eras.selectedOption.id &&
      !this.getSides().availableOptions.map(v => v.id).includes(this.wizardService.sides.selectedOption.id)) {
      this.wizardService.sides.selectedOption.id = '';
    }
  }

  next() {
    // this.wizardService.side = this.sides.selectedOption.id;

    this.wizardService.setData(
      this.wizardService.sides.selectedOption.id ?
        WizardService.filter(this.vehicles, 'side', this.wizardService.sides.selectedOption.id) :
        this.vehicles);
    // this.router.navigateByUrl('/distance');
    this.stateService.next();
  }

  back() {
    this.wizardService.resetLastDataFromHistory();
    // this.location.back();
    this.stateService.previous();
  }

  getSides(): any {
    const sides = FilterHelper.getSides(this.vehicles);
    this.sides.availableOptions = [];
    for (const side of sides) {
      this.sides.availableOptions.push({ id: side, name: GrammarHelper.toTitleCase(side) });
    }
    this.sides.availableOptions.sort((a, b) => a.name.localeCompare(b.name));
    this.sides.availableOptions.unshift({ id: '', name: 'Any' });
    return this.sides;
  }
}
