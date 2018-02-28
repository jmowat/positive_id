import { Component, OnInit } from '@angular/core';
import { QuizService }  from '../quiz.service';
import { Test }  from '../test';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [  ]
})
export class QuizComponent implements OnInit {
	//test: Test;
	value: number;

  	constructor(public quizService: QuizService) { 
  		this.value = 1;
  	}

	ngOnInit() {
		this.quizService.createNewTest();
	}

	getTest() : Test {
		return this.quizService.getTest();
	}

	nextQuestion() {
		this.quizService.getTest().nextQuestion();
	}

	previousQuestion() {
		this.quizService.getTest().previousQuestion();
	}

	getPossibleAnswers(): any[] {
		return this.quizService.getTest().getQuestion().getPossibleAnswers();
	}

	getCurrentQuestionNumber():number {
		// zero offset, so plus 1 for human readable
		console.log("Current question ID",this.quizService.getTest().getCurrentQuestionIndex() + 1);
		return this.quizService.getTest().getCurrentQuestionIndex() + 1;
	}

	getTotalNumberOfQuestions():number {
		console.log("Total number of questions",this.quizService.getTest().getNumberOfQuestions());
		return this.quizService.getTest().getNumberOfQuestions();
	}
}
