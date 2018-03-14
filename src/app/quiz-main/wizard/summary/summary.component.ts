import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VehicleService } from '../../../vehicle.service';
import { GameParmsService } from '../../game/game-parms.service';
import { WizardService } from '../wizard.service';
import { Vehicle } from '../../../vehicle';
import { FilterHelper } from '../../../filter-helper';
import { GrammarHelper } from '../../grammar-helper';
import { QuizParmDisplayComponent } from '../quiz-parm-display/quiz-parm-display.component';
import { QuizParms } from '../../game/quiz-parms';
import { GameBuilderStateService } from '../state/game-builder-state.service';
import { Validators } from '@angular/forms';
import { CustomMinDirective } from '../../../custom-min-validator.directive';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  vehicles: Vehicle[];
  maxQuestions: number;

  constructor(private router: Router, private location: Location, public parmsService: GameParmsService,
    public wizardService: WizardService, public stateService: GameBuilderStateService) { }

  ngOnInit() {
    this.vehicles = this.wizardService.getData();
    this.maxQuestions = this.getDefaultMaxQuestions();
  }

  next() {
    // defensive max cap to prevent DoS. 1000 is arbitrary
    this.wizardService.maxQuestions = this.maxQuestions > 1000  ? 1000 : this.maxQuestions;
    // console.log('Summary fetched the following parms from wizard:', this.wizardService.getQuizParms());
    this.parmsService.setTestParms(this.wizardService.getQuizParms());
    // this.router.navigateByUrl('/quiz');
    this.stateService.next();
  }

  back() {
    this.wizardService.resetLastDataFromHistory();
    // this.location.back();
    this.stateService.previous();
  }

  getDefaultMaxQuestions(): number {
    if (this.stateService.getDefaultMaxQuestions()) {
      return 10;
    } else {
      return this.vehicles.length;
    }
  }
}
