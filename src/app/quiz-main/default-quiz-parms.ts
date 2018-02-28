import { Injectable } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { QuizParms } from './quiz-parms';

export const DEFAULT_QUIZ_PARMS = new InjectionToken<QuizParms>('default.ground.quiz');

@Injectable()
export const DEFAULT_GROUND_QUIZ = {
	optionsToShow: 5,
    numberOfQuestions: 5,
    platforms: ["ground vehicle"],
    profiles: ["side", "front", "oblique"],
    distances: ["near"],
    optics: ["naked eye"],
    sides: ["eastern", "western"],
    randomizeQuestions: true
}