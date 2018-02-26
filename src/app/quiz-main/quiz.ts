
import { Test } from './test';
import { VehicleCard } from './vehicle-card';
import { Randomizer } from './randomizer';
import { Vehicle } from '../vehicle';

export class Quiz extends Test {
	vehicles: any[];

	constructor(vehicles, options = {
		optionsToShow: 5,
		numberOfQuestions: 5,
		randomizeQuestions: true
	}) {
		super();

		this.vehicles = vehicles;
		// For every vehicle passed to the quiz, create a vehicle card and a quiz question and push the question to the total quiz questions
		for (let i = 0; i < this.vehicles.length; i++) {
			//console.log(vehicles[i]);
			let vehicleCard = new VehicleCard(this.vehicles[i], options);
			let quizQuestion = new QuizQuestion(vehicleCard, this.getNamesBySide(this.vehicles[i].side, this.vehicles[i].type), options.optionsToShow, options.randomizeQuestions);
			this.questions.push(quizQuestion);
		}

		this.filterVehicles(options);

		// randomize the questions
		if (options.randomizeQuestions) {
			this.randomizeQuestionOrder();
		}

		// splice out everything but the number to show; this works because they were already randomized
		this.questions = this.questions.splice(0, this.getNumberOfQuestionsToShow(options));
	}

	getNamesBySide(sides, platform) {
		//console.log("sides",sides);
		//console.log("platform",platform);
		//
		let filteredVehicles: Vehicle[];
		for (let i = 0; i < sides.length; i++) {
			/*jshint loopfunc: true */
			filteredVehicles = this.vehicles.filter((vehicle) => {
				return vehicle.side.includes(sides[i]) && vehicle.type === platform;
			});
		}
		return Array.from(filteredVehicles, val => val.name);
	}
}

export class QuizQuestion {
	//card: VehicleCard;
	imageOptions: any;
	//numToShow: number;
	possibleAnswers: any[];
	currentImage: string;

	constructor(public card: VehicleCard, supply:any[], numToShow: number, randomize:boolean = true) {
		//this.card: VehicleCard = card;
		this.imageOptions = {};
		//this.numToShow = numToShow;
		this.possibleAnswers = [];
		this.setPossibleAnswers(supply, numToShow, randomize);
		this.currentImage = "";
	}

	getName() {
		return this.card.name;
	}

	getImagePath(customOptions) {
		return this.card.getImagePath(customOptions);
	}

	getRandomImagePath() {
		return this.card.getRandomImagePath();
	}

	setPossibleAnswers(supply, count, randomize) {
		let possibleAnswers = [];
		if (supply.length > 0) {
			supply = Randomizer.shuffle(supply);
			let x = 0;
			while (x < count - 1) {
				if (supply[x] != this.card.name) {
					possibleAnswers.push(supply[x]);
				} else {
					count++;
				}
				x++;
			}
		}
		possibleAnswers.unshift(this.card.name);
		if (randomize) {
			possibleAnswers = Randomizer.shuffle(possibleAnswers);
		}
		this.possibleAnswers = possibleAnswers;
	}

	getPossibleAnswers() {
		return this.possibleAnswers;
	}
}