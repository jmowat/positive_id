import { Injectable } from '@angular/core';
import { Test } from '../test';
import { QuizService } from '../quiz.service';
import { State } from './state';
import { Context } from './context';

@Injectable()
export class StateService {
	context: Context;
	state: string;

	constructor(private quizService: QuizService) {
		let quizParms;// = $stateParams.quizParms;
		// $state.current.name is some AngularJS name from the router, I think
		let stateName;// = $state.current.name;
		let quizStateDetails:any = {
			stateName: stateName,
			stateParams: quizParms
		};
		this.context = new Context(quizStateDetails);
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
		this.context.goNext(answer, this.getTest(), this.state);
	}

	getUserSelection(): string {
		return this.context.current.getUserAnswer();
	}

	getTest(): Test {
		return this.quizService.getTest();
		//return undefined;
	}
}
