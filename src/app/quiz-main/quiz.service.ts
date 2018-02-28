import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { TestFactory } from './test-factory';
import { Test } from './test';
import { Quiz } from './quiz';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';
import { DEFAULT_QUIZ_PARMS } from './default-quiz-parms';
import { QuizParms } from './quiz-parms';

@Injectable()
export class QuizService {
	t:Test;
	vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService,
              @Inject(DEFAULT_QUIZ_PARMS) quizParms: QuizParms) {
      vehicleService.getVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
      this.t = new Quiz(this.vehicles, quizParms);
    });
  }

  getTest(): Test {
  	return this.t;
  }
}
