import { Component, OnInit, Input } from '@angular/core';
import { WizardService } from '../wizard.service';
import { GrammarHelper } from '../../grammar-helper';
import { QuizParms } from '../../game/quiz-parms';

@Component({
  selector: 'app-quiz-parm-display',
  templateUrl: './quiz-parm-display.component.html',
  styleUrls: ['./quiz-parm-display.component.css']
})
export class QuizParmDisplayComponent implements OnInit {
  @Input()
  type: string;

  constructor(private wizardService: WizardService) { }

  ngOnInit() {
  }

  getSides() {
    if (this.wizardService.getStateData().sides.length === 1
      && this.wizardService.getStateData().sides[0] === '') {
      return 'Any';
    }
    return this.wizardService.getStateData().sides.map((v) => GrammarHelper.toTitleCase(v));
  }

  getDistances() {
    if (this.wizardService.getStateData().distances.length === 1
      && this.wizardService.getStateData().distances[0] === '') {
      return 'Any';
    }
    return this.wizardService.getStateData().distances.map((v) => GrammarHelper.toTitleCase(v));
  }

  getEras() {
    if (this.wizardService.getStateData().eras.length === 1
      && this.wizardService.getStateData().eras[0] === '') {
      return 'Any';
    }
    return this.wizardService.getStateData().eras.map((v) => GrammarHelper.toTitleCase(v));
  }

  getOptics() {
    if (this.wizardService.getStateData().optics.length === 1
      && this.wizardService.getStateData().optics[0] === '') {
      return 'Any';
    }
    return this.wizardService.getStateData().optics.map((v) => GrammarHelper.toTitleCase(v));
  }

  getPerspectives() {
    return this.wizardService.getStateData().profiles.map((v) => GrammarHelper.toTitleCase(v));
  }

  getPlatforms() {
    return this.wizardService.getStateData().platforms.map((v) => GrammarHelper.toTitleCase(v));
  }

  getVehicles() {
    return this.wizardService.getStateData().originalValues;
  }

  isDrill(): boolean {
    return this.type.toLowerCase() === 'drill';
  }

}
