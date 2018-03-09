import { BaseState } from './game-state';
import { Router } from '@angular/router';

export class GameContext {
	current: BaseState;

	constructor() {
		// Starting state
		this.current = new BaseState();
	}

	setState(state) {
		this.current = state;
	}

	goNext(answer, quiz, router: Router) {
		this.current.goNext(this, answer, quiz, router);
	}
}
