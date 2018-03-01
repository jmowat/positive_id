import { VehicleCard } from './vehicle-card';
import { Randomizer } from './randomizer';

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