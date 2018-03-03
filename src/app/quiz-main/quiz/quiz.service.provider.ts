import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { TestFactory } from '../test-factory';
import { Test } from '../test';
import { VehicleService } from '../../vehicle.service';
import { Vehicle } from '../../vehicle';
import { TEST_PARMS, WW2_SOVIET_AIRCRAFT_DRILL, DEFAULT_GROUND_QUIZ } from '../test-parms';
import { QuizParms } from '../quiz-parms';
import { QuizService } from './quiz.service';
import { Router, RoutesRecognized } from '@angular/router';

let quizServiceFactory = (vehicleService: VehicleService) => {
	/*
	 * Use a canned set of parms to get the factory provider working
	 */
  	return new QuizService(vehicleService);
};

function getParms() {
	return DEFAULT_GROUND_QUIZ;
}

export let quizServiceProvider = {
	provide: QuizService,
    useFactory: quizServiceFactory,
    deps: [VehicleService, Router]
 };
