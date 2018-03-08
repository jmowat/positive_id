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

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  vehicles: Vehicle[];
  maxQuestions: number;

  constructor(private router: Router, private location: Location, private parmsService: GameParmsService,
    public wizardService: WizardService, private stateService: GameBuilderStateService) { }

  ngOnInit() {
    this.vehicles = this.wizardService.getData();
    this.maxQuestions = this.vehicles.length;
  }

  next() {
    this.wizardService.maxQuestions = this.maxQuestions;
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
}
