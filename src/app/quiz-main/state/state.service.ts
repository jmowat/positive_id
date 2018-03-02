import { Injectable } from '@angular/core';
import { Test } from '../test';
import { QuizService } from '../quiz/quiz.service';
import { State } from './state';
import { Context } from './context';
import { QuizParms } from '../quiz-parms';
import { Router } from '@angular/router';

@Injectable()
export class StateService {
	context: Context;

	constructor(private quizService: QuizService, private router:Router) {
		this.context = new Context();
	}

	getStatus(): string {
		return this.context.current.getStatus();
	}

	getStatusMessage(): string {
		return this.context.current.getStatusText();
	}

	isSelectionDisabled(): boolean {
		return this.context.current.getDisableSelection();
	}

	getActionText(): string {
		return this.context.current.getActionText();
	}

	acceptAnswer(answer:string) {
		this.context.goNext(answer, this.getTest(), this.router);
	}

	getUserSelection(): string {
		return this.context.current.getUserAnswer();
	}

	getTest(): Test {
		return this.quizService.getTest();
	}

	createNewTest(quizParms: QuizParms) {
		this.quizService.createNewTest(quizParms);
		this.context = new Context();
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
}
