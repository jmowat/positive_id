import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';
import { StateService } from '../state/state.service';
import { Test } from '../test';
import { QuizParms } from '../quiz-parms';
import { QuizComponent } from '../quiz/quiz.component';
import { TestParmsService } from './test-parms.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class RedoQuizComponent extends QuizComponent implements OnInit {
  	constructor(service: StateService, parms: TestParmsService) {
  		super(service, parms);
  	}

	ngOnInit() {
		if (this.service.getTest()) {
			this.service.getTest().reset();
			this.service.reset();
		}
		this.setButtonClasses();
  		this.setStatusClasses();
	}
}
