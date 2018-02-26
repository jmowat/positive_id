import { Quiz } from './quiz';
import { Drill } from './drill';

export class TestFactory {
	static createTest(vehicles, options) {
		if (options && options.hasOwnProperty('originalValues')) {
			//console.log("Return drill");
			return new Drill(vehicles, options);
		} else {
			//console.log("Return quiz");
			return new Quiz(vehicles, options);
		}
	}
}