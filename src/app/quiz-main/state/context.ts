import { BaseState } from './state';

export class Context {
	current: BaseState;

	constructor() {
		// Starting state
		this.current = new BaseState();
	}

	setState(state) {
		this.current = state;
	}

	goNext(answer, quiz) {
		this.current.goNext(this, answer, quiz);
	}
}