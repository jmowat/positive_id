import { QuizBuilderState, PlatformSelectionState } from './quiz-builder-state';
import { Router } from '@angular/router';
import { BuilderContext } from './builder-context';

export class QuizBuilderContext extends BuilderContext {
	current: QuizBuilderState;

	constructor() {
		// Starting state
		super();
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

	reset() {
		return new QuizBuilderContext();
	}
}
