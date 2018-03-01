import { Component, OnInit } from '@angular/core';
import { QuizService }  from '../quiz.service';
import { StateService }  from '../state/state.service';
import { Test }  from '../test';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
	userSelection: string;
	buttonClasses: any;
	statusClasses: any;

  	constructor(public service: StateService) {

  	}

	ngOnInit() {
		this.service.createNewTest();
		this.setButtonClasses();
  		this.setStatusClasses();
	}

	getPossibleAnswers(): any[] {
		return this.service.getTest().getQuestion().getPossibleAnswers();
	}

	getCurrentQuestionNumber():number {
		// zero offset, so plus 1 for human readable
		return this.service.getTest().getCurrentQuestionIndex() + 1;
	}

	getTotalNumberOfQuestions():number {
		return this.service.getTest().getNumberOfQuestions();
	}

	next() {
		this.service.acceptAnswer(this.userSelection);
		this.setButtonClasses();
		this.setStatusClasses();
		// clear out previous user selection
		this.userSelection = "";
	};

	setButtonClasses() {
		this.buttonClasses =  {
			'btn': 'btn',
			'btn-lg': 'btn-lg',
			'btn-primary': 'btn-primary',
			'btn-success': this.service.getStatus() == "success",
			'btn-danger': this.service.getStatus() == "danger"
		  };
	}

	setStatusClasses() {
		this.statusClasses =  {
			'alert-success': this.service.getStatus() == "success",
			'alert-danger': this.service.getStatus() == "danger"
		  };
	}
}
