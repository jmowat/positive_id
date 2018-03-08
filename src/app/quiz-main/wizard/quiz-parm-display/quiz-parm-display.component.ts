import { Component, OnInit } from '@angular/core';
import { WizardService } from '../wizard.service';
import { GrammarHelper } from '../../grammar-helper';
import { QuizParms } from '../../game/quiz-parms';

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
    return this.wizardService.getStateData().sides.map((v) => GrammarHelper.toTitleCase(v));
  }

  getDistances() {
    return this.wizardService.getStateData().distances.map((v) => GrammarHelper.toTitleCase(v));
  }

  getEras() {
    return this.wizardService.getStateData().eras.map((v) => GrammarHelper.toTitleCase(v));
  }

  getOptics() {
    return this.wizardService.getStateData().optics.map((v) => GrammarHelper.toTitleCase(v));
  }

  getPerspectives() {
    return this.wizardService.getStateData().profiles.map((v) => GrammarHelper.toTitleCase(v));
  }

  getPlatforms() {
    return this.wizardService.getStateData().platforms.map((v) => GrammarHelper.toTitleCase(v));
  }

}
