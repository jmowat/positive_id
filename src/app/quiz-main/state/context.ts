import { BaseState } from './state';

export class Context {
	current: BaseState;

	constructor(private quizStateDetails:any) {
		// Starting state
		this.current = new BaseState();
		this.quizStateDetails = quizStateDetails;
	}

	setState(state) {
		this.current = state;
	}

	goNext(answer, quiz, $state) {
		this.current.goNext(this, answer, quiz, $state);
	}
}