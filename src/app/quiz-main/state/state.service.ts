import { Injectable } from '@angular/core';
import { Test } from '../test';
import { QuizService } from '../quiz.service';

@Injectable()
export class StateService {

	constructor(private quizService: QuizService) { }

	getStatus(): string {
		return undefined;
	}

	getStatusMessage(): string {
		return undefined;
	}

	isSelectionDisabled(): boolean {
		return false;
	}

	getActionText(): string {
		return undefined;
	}

	acceptAnswer(answer:string) {

	}

	getUserSelection(): string {
		return undefined;
	}

	getTest(): Test {
		//return this.quizService.getTest();
		return undefined;
	}
}
