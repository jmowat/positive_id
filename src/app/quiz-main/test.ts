import { Randomizer } from './randomizer';
import { QuizQuestion } from './quiz-question';

/*
 * Abstract base class for Quiz and Drill
 */
export class Test {

	questions: QuizQuestion[];
	currentQuestion: number;
	mistakes: Set<any>;

	constructor() {
		this.questions = [];
		// initalize starting question
		this.currentQuestion = 0;
		// track unique mistakes
		this.mistakes = new Set();

	}

	getNumberOfQuestionsToShow(options) {
		// either show the number of questions passed by option, or show them all if nothing is passed
		let numberOfQuestions = options.numberOfQuestions < this.questions.length ? options.numberOfQuestions : this.questions.length;
		return numberOfQuestions <= 100 ? options.numberOfQuestions : 100;
	}

	filterVehicles(options) {
		let findOne = (haystack, arr) => {
			return arr.some((v) => {
				return haystack.indexOf(v) >= 0;
			});
		};

		// prune the questions by platform
		if (options.platforms) {
			this.questions = this.questions.filter((question => {
				return findOne(question.card.data.type, options.platforms);
			}));
		}

		// prune the questions by side
		if (options.sides) {
			this.questions = this.questions.filter((question => {
				return findOne(question.card.data.side, options.sides);
			}));
		}

		if (options.eras) {
			this.questions = this.questions.filter((question => {
				return findOne(question.card.data.era, options.eras);
			}));
		}
	}

	nextQuestion() {
		this.currentQuestion = this.currentQuestion < this.questions.length - 1 ? this.currentQuestion + 1 : this.questions.length - 1;
		return this;
	}

	previousQuestion() {
		this.currentQuestion = this.currentQuestion > 0 ? this.currentQuestion - 1 : 0;
		return this;
	}

	getQuestionAt(index) {
		return this.questions[index];
	}

	getQuestion(): QuizQuestion {
		return this.questions[this.currentQuestion];
	}

	getCurrentQuestionIndex() {
		return this.currentQuestion;
	}

	getNumberOfQuestions() {
		return this.questions.length;
	}

	randomizeQuestionOrder() {
		this.questions = Randomizer.shuffle(this.questions);
	}

	markQuestionWrong() {
		this.mistakes.add(this.getQuestion());
	}

	getWrongQuestions() {
		return Array.from(this.mistakes);
	}

	onLastQuestion() {
		return this.currentQuestion == (this.questions.length - 1);
	}

	getNumRight() {
		return this.getNumberOfQuestions() - this.getNumWrong();
	}

	getNumWrong() {
		return this.getWrongQuestions().length;
	}

	findQuestion(questionID) {
		for (let question of this.questions) {
			if (question.getName() === questionID) {
				return question;
			}
		}
	}

	reset() {
		this.currentQuestion = 0;
		this.mistakes = new Set();
	}
}

