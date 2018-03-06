import { Test } from './test';
import { VehicleCard } from './vehicle-card';
import { Randomizer } from './randomizer';
import { Vehicle } from '../vehicle';
import { QuizParms } from './quiz-parms';
import { QuizQuestion } from './quiz-question';

export class Quiz extends Test {
  vehicles: any[];

  constructor(vehicles, options: QuizParms = {
    optionsToShow: 5,
    numberOfQuestions: 5,
    randomizeQuestions: true
  }) {
    super();

    this.vehicles = vehicles;
    // For every vehicle passed to the quiz, create a vehicle card and a quiz question and push the question to the total quiz questions
    for (let i = 0; i < this.vehicles.length; i++) {
      // console.log(vehicles[i]);
      const vehicleCard = new VehicleCard(this.vehicles[i], options);
      const quizQuestion = new QuizQuestion(
        vehicleCard,
        this.getNamesBySide(this.vehicles[i].side, this.vehicles[i].type),
        options.optionsToShow,
        options.randomizeQuestions
      );
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
    // console.log("sides",sides);
    // console.log("platform",platform);
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
