import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { TestFactory } from '../test-factory';
import { Test } from '../test';
import { VehicleService } from '../../vehicle.service';
import { Vehicle } from '../../vehicle';
import { TEST_PARMS } from '../test-parms';
import { QuizParms } from '../quiz-parms';

@Injectable()
export class QuizService {
  t: Test;
  vehicles: Observable<Vehicle[]>;

  constructor(private vehicleService: VehicleService) {

  }

  getTest(): Test {
    // console.log("getTest being called and test is", this.t);
    return this.t;
  }

  createNewTest(quizParms: QuizParms) {
    this.vehicleService.getVehicles().subscribe(v => {
      this.t = TestFactory.createTest(v, quizParms);
    });
  }
}
