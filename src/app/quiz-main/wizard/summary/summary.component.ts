import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VehicleService } from '../../../vehicle.service';
import { TestParmsService } from '../../quiz/test-parms.service';
import { WizardService } from '../wizard.service';
import { Vehicle } from '../../../vehicle';
import { FilterHelper } from '../../../filter-helper';
import { GrammarHelper } from '../../grammar-helper';
import { QuizParmDisplayComponent } from '../quiz-parm-display/quiz-parm-display.component';
import { QuizParms } from '../../quiz-parms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  vehicles: Vehicle[];
  maxQuestions: number;

  constructor(private router: Router, private location: Location, private parmsService: TestParmsService,
    public wizardService: WizardService) { }

  ngOnInit() {
    this.vehicles = this.wizardService.getData();
    this.maxQuestions = this.vehicles.length;
  }

  next() {
    this.wizardService.maxQuestions = this.maxQuestions;
    this.parmsService.setTestParms(this.wizardService.getQuizParms());
    this.router.navigateByUrl('/quiz');
  }

  back() {
    this.wizardService.resetLastDataFromHistory();
    this.location.back();
  }

}
