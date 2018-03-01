import { GrammarHelper } from '../grammar-helper';
import { Context } from './context';
import { Router } from '@angular/router';

export class State {
	actionText: string;
	statusText: string;
	status: string;
	disableSelection: boolean;
	userAnswer: string;
	name: string;

	constructor() {
		this.actionText = "";
		this.statusText = "";
		this.status = "";
		this.disableSelection = false;
		this.userAnswer = "";
		this.name = "State";
	}

	goNext(context, userAnswer, quiz, router: Router) {
		throw new Error('You have to implement the method doSomething!');
	}

	getActionText() {
		return this.actionText;
	}

	getStatusText() {
		return this.statusText;
	}

	getStatus() {
		return this.status;
	}

	getDisableSelection() {
		return this.disableSelection;
	}

	getUserAnswer() {
		return this.userAnswer;
	}

	getName() {
		return this.name;
	}
}

export class BaseState extends State {
	constructor() {
		super();
		this.actionText = "Next";
		this.statusText = "";
		this.status = "";
		this.disableSelection = false;
		this.name = "BaseState";
	}

	goNext(context, userAnswer, quiz, router: Router) {
		// Logic to determine next state
		if (userAnswer === "" || userAnswer === undefined) {
			context.setState(new InvalidState());
		} else {
			if (userAnswer === quiz.getQuestion().getName()) {
				if (!quiz.onLastQuestion()) {
					context.setState(new SuccessNextState(userAnswer));
				} else {
					context.setState(new SuccessFinishState(userAnswer));
				}
			} else {
				context.setState(new WrongState(userAnswer, quiz));
			}
		}
	}
}

class SuccessNextState extends BaseState {
	constructor(userAnswer) {
		super();
		this.actionText = "Next";
		this.statusText = "Correct, that is " + GrammarHelper.getIndefiniteArticle(userAnswer) +
			" <strong>" + userAnswer + ".</strong>" + " Press " + this.actionText + " to continue.";
		this.status = "success";
		this.disableSelection = true;
		this.name = "SuccessNextState";
		this.userAnswer = userAnswer;
	}

	goNext(context, userAnswer, quiz) {
		quiz.nextQuestion();
		context.setState(new BaseState());
	}
}

class SuccessFinishState extends BaseState {
	constructor(userAnswer) {
		super();
		this.actionText = "Finish";
		this.statusText = "Correct, that is " + GrammarHelper.getIndefiniteArticle(userAnswer) +
			" <strong>" + userAnswer + ".</strong>" + " Press " + this.actionText + " to view your results.";
		this.status = "success";
		this.disableSelection = true;
		this.name = "SuccessFinishState";
		this.userAnswer = userAnswer;
	}

	goNext(context, userAnswer, quiz, router: Router) {
		//console.log(context.quizStateDetails);
		// this.$state.go('score', {
		// 	quizStateDetails: context.quizStateDetails
		// });
		//this.$location.path('score');
		router.navigateByUrl("/score");
	}
}

class WrongState extends BaseState {
	constructor(userAnswer, quiz) {
		super();
		this.actionText = "Next";
		this.statusText = ("That is not " + GrammarHelper.getIndefiniteArticle(userAnswer) +
			" <strong>" + userAnswer + ".</strong> Please try again.");
		this.status = "danger";
		this.disableSelection = false;
		this.name = "WrongState";
		this.userAnswer = userAnswer;
		quiz.markQuestionWrong();
	}
}

class InvalidState extends BaseState {
	constructor() {
		super();
		this.actionText = "Next";
		this.statusText = "Please choose an answer from the options above.";
		this.status = "danger";
		this.disableSelection = false;
		this.name = "InvalidState";
	}
}

