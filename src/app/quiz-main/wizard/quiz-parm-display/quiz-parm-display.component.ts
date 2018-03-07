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

}
