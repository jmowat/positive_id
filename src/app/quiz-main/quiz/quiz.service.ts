import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { GameFactory } from '../game-factory';
import { Game } from '../game';
import { VehicleService } from '../../vehicle.service';
import { Vehicle } from '../../vehicle';
import { QuizParms } from '../quiz-parms';

@Injectable()
export class QuizService {
  t: Game;
  vehicles: Observable<Vehicle[]>;

  constructor(private vehicleService: VehicleService) {

  }

  getTest(): Game {
    // console.log("getTest being called and test is", this.t);
    return this.t;
  }

  createNewTest(quizParms: QuizParms) {
    this.vehicleService.getVehicles().subscribe(v => {
      this.t = GameFactory.createTest(v, quizParms);
    });
  }
}
