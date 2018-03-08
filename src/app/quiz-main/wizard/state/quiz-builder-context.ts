import { QuizBuilderState, PlatformSelectionState } from './quiz-builder-state';
import { Router } from '@angular/router';

export class QuizBuilderContext {
	current: QuizBuilderState;

	constructor() {
		// Starting state
		this.current = new PlatformSelectionState();
	}

	setState(state) {
		this.current = state;
	}

	goNext(router: Router) {
		this.current.goNext(this, router);
	}

	goPrevious(router: Router) {
		this.current.goPrevious(this, router);
	}
}
