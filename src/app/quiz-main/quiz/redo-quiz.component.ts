import { Component, OnInit } from '@angular/core';
import { QuizService }  from '../quiz/quiz.service';
import { StateService }  from '../state/state.service';
import { Test }  from '../test';
import { QuizParms } from '../quiz-parms';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizComponent }  from '../quiz/quiz.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class RedoQuizComponent extends QuizComponent {
  	constructor(service: StateService, router:Router, route:ActivatedRoute) {
  		super(service, router, route);
  	}

	ngOnInit() {
		if(this.service.getTest()) {
			this.service.getTest().reset();
			this.service.reset();
		}
		this.setButtonClasses();
  		this.setStatusClasses();
	}
}
