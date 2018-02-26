import { Quiz } from './quiz';
import { Vehicle } from '../vehicle';
import { VehicleCard } from './vehicle-card';
import { QuizQuestion } from './quiz';

describe('Quiz', () => {
  	it('create an instance', () => {
    	const quiz = new Quiz([]);
    	expect(quiz).toBeTruthy();
  	});

  	it('should create when passed some quiz parameters',() => {
  		const quiz = new Quiz("",quizParms);
  		expect(quiz).toBeTruthy();
  	});

	it('should create when passed some vehicles and some quiz parameters',() => {
  		const quiz = new Quiz(five,quizParms);
  		expect(quiz).toBeTruthy();
  	});

  	it('should have 5 quiz questions when passed enough vehicles and numberOfQuestions set to 5',()=>{
  		const quiz = new Quiz(five,quizParms);
  		expect(quiz.questions.length).toEqual(5);
  		expect(quiz.getNumberOfQuestions()).toEqual(5);
  	});

  	it('should start on question 0', () => {
		const quiz = new Quiz(five,quizParms);
		expect(quiz.getCurrentQuestionIndex()).toEqual(0);
  	});

	it('should have 5 possible answers as specified by optionsToShow', () => {
		const quiz = new Quiz(five,quizParms);
  		expect(quiz.getQuestion().getPossibleAnswers().length).toBe(5);
	});

	describe('ground vehicle quizzes', () => {
		let testArray: any[];
		beforeEach(() => {
			testArray = five.concat(luchs).concat(challenger2);
		});

		it('should see five array as existing', () => {
			expect(five).toBeTruthy();
		});

		it('should see luchs array as existing', () => {
			expect(luchs).toBeTruthy();
		});

		it('should be able to concat five and luchs to make a new array', () => {
			let testArray = five.concat(luchs);
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

		it('should create a quiz consisting of x random questions', () => {
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
			let card = new VehicleCard(bmp2[0],{});
			let question = new QuizQuestion(card, [], numToShow);

		});

		it('should allow a specific image to show', () => {
			let card = new VehicleCard(bmp2[0],{});
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
			let card = new VehicleCard(bmp2[0],{});
			let question = new QuizQuestion(card, [], numToShow);
			let img = question.getImagePath(undefined);
			for (let i = 0; i < 10; i++) {
				expect(question.getImagePath(undefined)).toEqual(img);
			}
		});

		it('should display a list of x possible answers with the right answer being first', () => {
			let card = new VehicleCard(bmp2[0],{});
			let randomize = false;
			let question = new QuizQuestion(card, ["a", "b", "c", "d", "e", "f", "g"], 5, randomize);
			expect(question.getPossibleAnswers().length).toBe(5);
			expect(question.getPossibleAnswers()[0]).toBe(card.name);
		});

		it('should not have duplicates of itself', () => {
			let card = new VehicleCard(bmp2[0],{});
			let randomize = false;
			let question = new QuizQuestion(card, ["BMP-2", "b", "c", "d", "e"], 5, randomize);

			expect(question.getPossibleAnswers().length).toBe(5);
			expect(question.getPossibleAnswers().filter(word => word == "BMP-2").length).toBe(1);
		});

		it('should display a list of x possible answers with the right answer being shuffled in', () => {
			let card = new VehicleCard(bmp2[0],{});
			let randomize = true;
			let question = new QuizQuestion(card, ["BMP-2", "b", "c", "d", "e", "f", "g"], 5, randomize);

			expect(question.getPossibleAnswers().length).toBe(5);
			expect(question.getPossibleAnswers().filter(word => word == "BMP-2").length).toBe(1);
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

let five: any[] = [{
	"name": "T-90",
	"side": ["eastern"],
	"type": "ground vehicle",
	"class": "main batle tank",
	"nationality": ["Soviet Union"],
	"era": ["modern"],
	"image_dir": "img/ground/t90",
	"images": [{
		"img_lg": "1.png",
		"img_sm": "1sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "2.png",
		"img_sm": "2sm.png",
		"perspective": "front",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "3.png",
		"img_sm": "3sm.png",
		"perspective": "oblique",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "4.png",
		"img_sm": "4sm.png",
		"perspective": "rear",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "5.png",
		"img_sm": "5sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}, {
		"img_lg": "6.png",
		"img_sm": "6sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "7.png",
		"img_sm": "7sm.png",
		"perspective": "front",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "8.png",
		"img_sm": "8sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}]
}, {
	"name": "T-80",
	"side": ["eastern"],
	"type": "ground vehicle",
	"class": "main batle tank",
	"nationality": ["Soviet Union"],
	"era": ["cold war", "modern"],
	"image_dir": "img/ground/t80",
	"images": [{
		"img_lg": "1.png",
		"img_sm": "1sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "2.png",
		"img_sm": "2sm.png",
		"perspective": "front",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "3.png",
		"img_sm": "3sm.png",
		"perspective": "oblique",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "4.png",
		"img_sm": "4sm.png",
		"perspective": "rear",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "5.png",
		"img_sm": "5sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}, {
		"img_lg": "6.png",
		"img_sm": "6sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "7.png",
		"img_sm": "7sm.png",
		"perspective": "front",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "8.png",
		"img_sm": "8sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}]
}, {
	"name": "T-72",
	"side": ["eastern", "Warsaw Pact"],
	"type": "ground vehicle",
	"class": "main battle tank",
	"nationality": ["Soviet Union"],
	"era": ["cold war", "modern"],
	"image_dir": "img/ground/t72",
	"images": [{
		"img_lg": "1.png",
		"img_sm": "1sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "2.png",
		"img_sm": "2sm.png",
		"perspective": "front",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "3.png",
		"img_sm": "3sm.png",
		"perspective": "oblique",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "4.png",
		"img_sm": "4sm.png",
		"perspective": "rear",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "5.png",
		"img_sm": "5sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}, {
		"img_lg": "6.png",
		"img_sm": "6sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "7.png",
		"img_sm": "7sm.png",
		"perspective": "front",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "8.png",
		"img_sm": "8sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}]
}, {
	"name": "T-62",
	"side": ["eastern", "Warsaw Pact"],
	"type": "ground vehicle",
	"class": "medium tank",
	"nationality": ["Soviet Union"],
	"era": ["cold war"],
	"image_dir": "img/ground/t62",
	"images": [{
		"img_lg": "1.png",
		"img_sm": "1sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "2.png",
		"img_sm": "2sm.png",
		"perspective": "front",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "3.png",
		"img_sm": "3sm.png",
		"perspective": "oblique",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "4.png",
		"img_sm": "4sm.png",
		"perspective": "rear",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "5.png",
		"img_sm": "5sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}, {
		"img_lg": "6.png",
		"img_sm": "6sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "7.png",
		"img_sm": "7sm.png",
		"perspective": "front",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "8.png",
		"img_sm": "8sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}]
}, {
	"name": "T-55",
	"side": ["eastern", "Warsaw Pact"],
	"type": "ground vehicle",
	"class": "medium tank",
	"nationality": ["Soviet Union"],
	"era": ["cold war"],
	"image_dir": "img/ground/t55",
	"images": [{
		"img_lg": "1.png",
		"img_sm": "1sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "2.png",
		"img_sm": "2sm.png",
		"perspective": "front",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "3.png",
		"img_sm": "3sm.png",
		"perspective": "oblique",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "4.png",
		"img_sm": "4sm.png",
		"perspective": "rear",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "5.png",
		"img_sm": "5sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}, {
		"img_lg": "6.png",
		"img_sm": "6sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "7.png",
		"img_sm": "7sm.png",
		"perspective": "front",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "8.png",
		"img_sm": "8sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}]
}];

let challenger2: any[] =  [{
	"name": "Challenger 2",
	"side": ["western"],
	"type": "ground vehicle",
	"class": "main battle tank",
	"nationality": ["United Kingdom"],
	"era": ["modern"],
	"image_dir": "img/ground/challenger2",
	"images": [{
		"img_lg": "1.png",
		"img_sm": "1sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "2.png",
		"img_sm": "2sm.png",
		"perspective": "front",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "3.png",
		"img_sm": "3sm.png",
		"perspective": "oblique",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "4.png",
		"img_sm": "4sm.png",
		"perspective": "rear",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "5.png",
		"img_sm": "5sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}, {
		"img_lg": "6.png",
		"img_sm": "6sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "7.png",
		"img_sm": "7sm.png",
		"perspective": "front",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "8.png",
		"img_sm": "8sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}]
}];


let luchs: any[] = [{
	"name": "SPz Luchs 2A2",
	"side": ["western"],
	"type": "ground vehicle",
	"class": "reconnaissance vehicle",
	"nationality": ["Germany"],
	"era": ["cold war"],
	"image_dir": "img/ground/spzluchs",
	"images": [{
		"img_lg": "1.png",
		"img_sm": "1sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "2.png",
		"img_sm": "2sm.png",
		"perspective": "front",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "3.png",
		"img_sm": "3sm.png",
		"perspective": "oblique",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "4.png",
		"img_sm": "4sm.png",
		"perspective": "rear",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "5.png",
		"img_sm": "5sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}, {
		"img_lg": "6.png",
		"img_sm": "6sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "7.png",
		"img_sm": "7sm.png",
		"perspective": "front",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "8.png",
		"img_sm": "8sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}]
}];

let bmp2: any[] = [{
	"name": "BMP-2",
	"side": ["eastern", "Warsaw Pact"],
	"type": "ground vehicle",
	"class": "infantry fighting vehicle",
	"nationality": ["Soviet Union", "Russia"],
	"era": ["cold war", "modern"],
	"image_dir": "img/ground/bmp2",
	"images": [{
		"img_lg": "1.png",
		"img_sm": "1sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "2.png",
		"img_sm": "2sm.png",
		"perspective": "front",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "3.png",
		"img_sm": "3sm.png",
		"perspective": "oblique",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "4.png",
		"img_sm": "4sm.png",
		"perspective": "rear",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "5.png",
		"img_sm": "5sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}, {
		"img_lg": "6.png",
		"img_sm": "6sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "7.png",
		"img_sm": "7sm.png",
		"perspective": "front",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "8.png",
		"img_sm": "8sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}]
}];