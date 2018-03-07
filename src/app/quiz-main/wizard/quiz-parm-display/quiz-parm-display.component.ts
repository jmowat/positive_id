import { Component, OnInit } from '@angular/core';
import { WizardService } from '../wizard.service';
import { GrammarHelper } from '../../grammar-helper';
import { QuizParms } from '../../quiz-parms';

@Component({
  selector: 'app-quiz-parm-display',
  templateUrl: './quiz-parm-display.component.html',
  styleUrls: ['./quiz-parm-display.component.css']
})
export class QuizParmDisplayComponent implements OnInit {

  constructor(private wizardService: WizardService) { }

  ngOnInit() {
  }

  getSides() {
    return this.wizardService.getQuizParms().sides.map((v) => GrammarHelper.toTitleCase(v));
  }

  getDistances() {
    return this.wizardService.getQuizParms().distances.map((v) => GrammarHelper.toTitleCase(v));
  }

  getEras() {
    return this.wizardService.getQuizParms().eras.map((v) => GrammarHelper.toTitleCase(v));
  }

  getOptics() {
    return this.wizardService.getQuizParms().optics.map((v) => GrammarHelper.toTitleCase(v));
  }

  getPerspectives() {
    return this.wizardService.getQuizParms().profiles;
  }

  getPlatforms() {
    return this.wizardService.getQuizParms().platforms.map((v) => GrammarHelper.toTitleCase(v));
  }

}
