import { Test } from './test';
import { Randomizer } from './randomizer';
import { VehicleCard } from './vehicle-card';
import { QuizQuestion } from './quiz-question';

export class Drill extends Test {
  constructor(private vehicles, options: DrillOptions) {
    super();
    const self = this;
    options.vehicleList = [].concat(options.originalValues);
    this.vehicles = vehicles;
    const numberOfQuestions = options.numberOfQuestions <= 100 ? options.numberOfQuestions : 100;
    // find the vehicle object for the vehicle name chosen
    const targetVehicleObjects = [];
    for (let i = 0; i < options.vehicleList.length; i++) {
      /*jshint loopfunc: true */
      const obj = this.vehicles.find((element) => {
        return element.name === options.vehicleList[i];
      });
      targetVehicleObjects.push(obj);
    }

    // for each question to show, randomly choose a vehicle in the selection
    // but make sure  to include one of each vehicle chosen, at the least
    // let drillScramble = [];
    // console.log("targetVehicleObjects", targetVehicleObjects);
    let drillScramble = [].concat(targetVehicleObjects);
    // console.log("pre", drillScramble);
    for (let i = 0; i < numberOfQuestions - targetVehicleObjects.length; i++) {
      drillScramble.push(targetVehicleObjects[Randomizer.getRandomInt(0, targetVehicleObjects.length - 1)]);
    }
    // console.log("post", drillScramble);
    // rescramble
    drillScramble = Randomizer.shuffle(drillScramble);

    const candidates = this.prepareOptions(options.vehicleList);

    // guarantee that the drill choices are part of the options
    // for every remaining open option, grab names from the same side, era, and platform
    const optionSupply = options.vehicleList;
    const num = options.optionsToShow - options.vehicleList.length;
    for (let i = 0; i < num; i++) {
      optionSupply.push(candidates[i]);
    }

    // For every vehicle passed to the quiz, create a vehicle card and a quiz question and push the question to the total quiz questions
    for (let i = 0; i < drillScramble.length; i++) {
      // console.log(vehicles[i]);
      const vehicleCard = new VehicleCard(drillScramble[i], options);
      const quizQuestion = new QuizQuestion(vehicleCard, optionSupply, options.optionsToShow, options.randomizeQuestions);
      this.questions.push(quizQuestion);
    }
  }

  prepareOptions(drillList) {
    let eras = [];
    let sides = [];
    let platforms = [];
    for (let i = 0; i < drillList.length; i++) {
      /*jshint loopfunc: true */
      const obj = this.vehicles.find((element) => {
        return element.name === drillList[i];
      });
      eras = eras.concat(obj.era);
      sides = sides.concat(obj.side);
      platforms = platforms.concat(obj.type);
    }

    const group = [eras, sides, platforms];
    for (let i = 0; i < group.length; i++) {
      const set = new Set(group[i]);
      group[i] = Array.from(set);
    }

    eras = group[0];
    sides = group[1];
    platforms = group[2];

    // create a list of name candidates
    // first, filter out all vehicles by platform, era, and side of the supplied vehicles
    // return the names of these candidates
    // remove the names already user selected from the candidates
    // randomly assign the remaining names to free slots in answer options
    const findOne = (haystack, arr) => {
      return arr.some((v) => {
        return haystack.indexOf(v) >= 0;
      });
    };

    // filter candidates and return just the names to be used as potential answers
    let candidates = this.vehicles.filter((element) => {
      // console.log("element.side", element.side);
      // console.log("element.side test", findOne(element.side, sides));
      return findOne(element.era, eras) && findOne(element.side, sides) && findOne(element.type, platforms);
    }).map(element => element.name);


    // remove user vehicle list from candidates
    candidates = candidates.filter(function(el) {
      return !drillList.includes(el);
    });
    // Randomize order of candidates
    return Randomizer.shuffle(candidates);
  }
}

export interface DrillOptions {
  optionsToShow: number;
  numberOfQuestions: number;
  distances?: string[];
  profiles?: string[];
  optics?: string[];
  platforms?: string[];
  originalValues: string[];
  randomizeQuestions?: boolean;
  vehicleList?: any[];
}
