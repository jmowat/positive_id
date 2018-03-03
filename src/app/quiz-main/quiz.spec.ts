import { Quiz } from './quiz';
import { Vehicle } from '../vehicle';
import { VehicleCard } from './vehicle-card';
import { QuizQuestion } from './quiz-question';
import { FIVE_VEHICLES, LUCHS, CHALLENGER2, BMP2 } from '../mock-vehicles';

describe('Quiz', () => {
  	it('create an instance', () => {
    	const quiz = new Quiz([]);
    	expect(quiz).toBeTruthy();
  	});

  	it('should create when passed some quiz parameters',() => {
  		const quiz = new Quiz([],quizParms);
  		expect(quiz).toBeTruthy();
  	});

	it('should create when passed some vehicles and some quiz parameters',() => {
  		const quiz = new Quiz(FIVE_VEHICLES,quizParms);
  		expect(quiz).toBeTruthy();
  	});

  	it('should have 5 quiz questions when passed enough vehicles and numberOfQuestions set to 5',()=>{
  		const quiz = new Quiz(FIVE_VEHICLES,quizParms);
  		expect(quiz.questions.length).toEqual(5);
  		expect(quiz.getNumberOfQuestions()).toEqual(5);
  	});

  	it('should start on question 0', () => {
		const quiz = new Quiz(FIVE_VEHICLES,quizParms);
		expect(quiz.getCurrentQuestionIndex()).toEqual(0);
  	});

	it('should have 5 possible answers as specified by optionsToShow', () => {
		const quiz = new Quiz(FIVE_VEHICLES,quizParms);
  		expect(quiz.getQuestion().getPossibleAnswers().length).toBe(5);
	});

	describe('ground vehicle quizzes', () => {
		let testArray: any[];
		beforeEach(() => {
			testArray = FIVE_VEHICLES.concat(LUCHS).concat(CHALLENGER2);
		});

		it('should see five array as existing', () => {
			expect(FIVE_VEHICLES).toBeTruthy();
		});

		it('should see luchs array as existing', () => {
			expect(LUCHS).toBeTruthy();
		});

		it('should be able to concat five and luchs to make a new array', () => {
			let testArray = FIVE_VEHICLES.concat(LUCHS);
			expect(testArray).toBeTruthy();
		});

		it('should see testArray', () => {
			expect(testArray).toBeTruthy();
		});

		it('should create questions with just thermal optics', () => {
			let options = {
				randomizeQuestions: false,
				optionsToShow: 5,
				numberOfQuestions: 5,
				distances: ["far"],
				profiles: ["side"],
				optics: ["thermal"]
			};
			const quiz = new Quiz(testArray,options);
			expect(quiz.getNumberOfQuestions()).toBe(5);
			for (let i = 0; i < quiz.questions.length; i++) {
				expect(quiz.getQuestion().getRandomImagePath()).toContain("8.png");
				quiz.nextQuestion();
			}
		});

		it('should create questions with just far pictures', () => {
			let options = {
				randomizeQuestions: false,
					optionsToShow: 5,
					numberOfQuestions: 5,
					distances: ["far"],
					profiles: ["side"],
					optics: ["naked eye"]
			};
			const quiz = new Quiz(testArray,options);
			expect(quiz.getNumberOfQuestions()).toBe(5);
			for (let i = 0; i < quiz.questions.length; i++) {
				expect(quiz.getQuestion().getRandomImagePath()).toContain("5.png");
				quiz.nextQuestion();
			}
		});

		it('should create questions with just near front, side, and oblique pictures', () => {
			let options = {
				randomizeQuestions: false,
					optionsToShow: 5,
					numberOfQuestions: 5,
					distances: ["near"],
					profiles: ["side", "front", "oblique"],
					optics: ["naked eye"]
			};
			const quiz = new Quiz(testArray,options);
			expect(quiz.getNumberOfQuestions()).toBe(5);
			for (let i = 0; i < quiz.questions.length; i++) {
					expect(quiz.getQuestion().getRandomImagePath()).not.toContain("4.png");
					quiz.nextQuestion();
				}
		});

		it('should create a quiz consisting of specified random questions', () => {
			let options = {
				randomizeQuestions: false,
					optionsToShow: 5,
					numberOfQuestions: 5,
					sides: ["eastern"]
			};
			const quiz = new Quiz(testArray,options);
			expect(quiz.getNumberOfQuestions()).toBe(5);
		});

		it('should create a quiz consisting of just eastern vehicles', () => {
			let options = {
				randomizeQuestions: false,
					optionsToShow: 5,
					numberOfQuestions: 5,
					sides: ["eastern"]
			};
			const quiz = new Quiz(testArray,options);
			expect(quiz.getNumberOfQuestions()).toBe(5);
			for (let i = 0; i < quiz.questions.length; i++) {
				expect(quiz.questions[i].card.data.side).toContain("eastern");
				expect(quiz.questions[i].card.data.side).not.toContain("western");
			}
		});

		it('should create a quiz consisting of just western vehicles', () => {
			let options = {
				randomizeQuestions: false,
					optionsToShow: 5,
					numberOfQuestions: 5,
					sides: ["western"]
			};
			const quiz = new Quiz(testArray,options);
			expect(quiz.getNumberOfQuestions()).toBe(2);
			for (let i = 0; i < quiz.questions.length; i++) {
				expect(quiz.questions[i].card.data.side).toContain("western");
				expect(quiz.questions[i].card.data.side).not.toContain("eastern");
			}
		});

		it('should create a quiz consisting of just modern era vehicles', () => {
			let options = {
				randomizeQuestions: false,
					optionsToShow: 5,
					numberOfQuestions: 5,
					eras: ["modern"]
			};
			const quiz = new Quiz(testArray,options);
			expect(quiz.getNumberOfQuestions()).toBe(4);
			for (let i = 0; i < quiz.questions.length; i++) {
				expect(quiz.questions[i].card.data.era).toContain("modern");
			}
		});
	});

	describe('quiz question', () => {
		const numToShow = 5;
		it('should randomly choose which image to show', () => {
			let card = new VehicleCard(BMP2[0],{});
			let question = new QuizQuestion(card, [], numToShow);

		});

		it('should allow a specific image to show', () => {
			let card = new VehicleCard(BMP2[0],{});
			let question = new QuizQuestion(card, [], numToShow);
			let img = question.getImagePath({
				size: "large",
				perspective: "side",
				distance: "near"
			});
			expect(img).toBe("/img/ground/bmp2/1.png");
			// Make sure default sticks
			// BUG: if you pass an empty object as parms, it doesn't return anything
			expect(question.getImagePath(undefined)).toBe(img);
			expect(question.getImagePath(undefined)).toBe(img);
		});

		it('should remember which image it chose to show', () => {
			let card = new VehicleCard(BMP2[0],{});
			let question = new QuizQuestion(card, [], numToShow);
			let img = question.getImagePath(undefined);
			for (let i = 0; i < 10; i++) {
				expect(question.getImagePath(undefined)).toEqual(img);
			}
		});

		it('should display a list of x possible answers with the right answer being first', () => {
			let card = new VehicleCard(BMP2[0],{});
			let randomize = false;
			let question = new QuizQuestion(card, ["a", "b", "c", "d", "e", "f", "g"], 5, randomize);
			expect(question.getPossibleAnswers().length).toBe(5);
			expect(question.getPossibleAnswers()[0]).toBe(card.name);
		});

		it('should not have duplicates of itself', () => {
			let card = new VehicleCard(BMP2[0],{});
			let randomize = false;
			let question = new QuizQuestion(card, ["BMP-2", "b", "c", "d", "e"], 5, randomize);

			expect(question.getPossibleAnswers().length).toBe(5);
			expect(question.getPossibleAnswers().filter(word => word == "BMP-2").length).toBe(1);
		});

		it('should display a list of x possible answers with the right answer being shuffled in', () => {
			let card = new VehicleCard(BMP2[0],{});
			let randomize = true;
			let question = new QuizQuestion(card, ["BMP-2", "b", "c", "d", "e", "f", "g"], 5, randomize);

			expect(question.getPossibleAnswers().length).toBe(5);
			expect(question.getPossibleAnswers().filter(word => word == "BMP-2").length).toBe(1);
		});
	});

	describe('quiz reset', () => {
		let quiz: Quiz;
		beforeEach(() => {
			quiz = new Quiz(FIVE_VEHICLES,{
												    optionsToShow: 5,
												    numberOfQuestions: 5,
												    platforms: ["ground vehicle"],
												    profiles: ["side", "front", "oblique"],
												    distances: ["near"],
												    optics: ["naked eye"],
												    sides: ["eastern", "western"],
												    randomizeQuestions: false
												});
			for(let i = 0; i < 5; i++) {
				quiz.markQuestionWrong();
				quiz.nextQuestion();
			}
		});

		it('should remove wrong answers', () => {
			expect(quiz.getNumWrong()).toEqual(5, 'all questions were wrong');
			quiz.reset();
			expect(quiz.getNumWrong()).toEqual(0, 'no questions are wrong');

		});

		it('should start back at question 0', () => {
			expect(quiz.getCurrentQuestionIndex()).toEqual(4, 'at last question');
			quiz.reset();
			expect(quiz.getCurrentQuestionIndex()).toEqual(0,'back at first question');
		});
	});
});

let quizParms: {
    optionsToShow: 5,
    numberOfQuestions: 5,
    platforms: ["ground vehicle"],
    profiles: ["side", "front", "oblique"],
    distances: ["near"],
    optics: ["naked eye"],
    sides: ["eastern", "western"],
    randomizeQuestions: true
};
