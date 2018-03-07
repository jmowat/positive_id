import { Injectable } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { QuizParms } from './quiz-parms';

export const TEST_PARMS = new InjectionToken<QuizParms>('test.parms');

export const DEFAULT_GROUND_QUIZ = {
	optionsToShow: 5,
    numberOfQuestions: 10,
    platforms: ['ground vehicle'],
    profiles: ['side', 'front', 'oblique'],
    distances: ['near'],
    optics: ['naked eye'],
    sides: ['eastern', 'western'],
    randomizeQuestions: true
};

export const THERMALS_GROUND_QUIZ = {
    optionsToShow: 5,
    numberOfQuestions: 20,
    platforms: ['ground vehicle'],
    profiles: ['side', 'front', 'oblique'],
    distances: ['near'],
    optics: ['thermal'],
    sides: ['eastern', 'western'],
    randomizeQuestions: true
};

export const FAR_GROUND_QUIZ = {
    optionsToShow: 5,
    numberOfQuestions: 20,
    platforms: ['ground vehicle'],
    profiles: ['side', 'front', 'oblique'],
    distances: ['far'],
    optics: ['naked eye'],
    sides: ['eastern', 'western'],
    randomizeQuestions: true
};

export const EASTERN_GROUND_QUIZ = {
    optionsToShow: 5,
    numberOfQuestions: 20,
    platforms: ['ground vehicle'],
    profiles: ['side', 'front', 'oblique'],
    distances: ['near'],
    optics: ['naked eye'],
    sides: ['eastern'],
    randomizeQuestions: true
};

export const WESTERN_GROUND_QUIZ = {
    optionsToShow: 5,
    numberOfQuestions: 20,
    platforms: ['ground vehicle'],
    profiles: ['side', 'front', 'oblique'],
    distances: ['near'],
    optics: ['naked eye'],
    sides: ['western'],
    randomizeQuestions: true
};

export const REAR_GROUND_QUIZ = {
    optionsToShow: 5,
    numberOfQuestions: 20,
    platforms: ['ground vehicle'],
    profiles: ['rear'],
    distances: ['near'],
    optics: ['naked eye'],
    sides: ['western', 'eastern'],
    randomizeQuestions: true
};

export const WW2_AIRCRAFT_QUIZ = {
    optionsToShow: 5,
    numberOfQuestions: 10,
    distances: ['near'],
    optics: ['naked eye'],
    platforms: ['aircraft'],
    eras: ['world war ii'],
    randomizeQuestions: true
};

export const WESTERN_AIRCRAFT_QUIZ = {
    optionsToShow: 5,
    numberOfQuestions: 10,
    distances: ['near'],
    profiles: ['side', 'front', 'oblique', 'top'],
    optics: ['naked eye'],
    platforms: ['aircraft'],
    sides: ['western'],
    randomizeQuestions: true
};

export const EASTERN_AIRCRAFT_QUIZ = {
    optionsToShow: 5,
    numberOfQuestions: 10,
    distances: ['near'],
    profiles: ['side', 'front', 'oblique', 'top'],
    optics: ['naked eye'],
    platforms: ['aircraft'],
    sides: ['eastern'],
    randomizeQuestions: true
};

export const FAR_MODERN_AIRCRAFT_QUIZ = {
    optionsToShow: 5,
    numberOfQuestions: 20,
    distances: ['far'],
    profiles: ['side', 'oblique'],
    optics: ['naked eye'],
    platforms: ['aircraft'],
    sides: ['eastern', 'western'],
    randomizeQuestions: true
};

export const WW2_AIRCRAFT_DRILL = {
    optionsToShow: 5,
    numberOfQuestions: 12,
    distances: ['far'],
    profiles: ['side', 'oblique'],
    optics: ['naked eye'],
    platforms: ['aircraft'],
    originalValues: ['MiG-3', 'Yak-1', 'LaGG 3', 'P-40'],
    randomizeQuestions: true
};

export const WW2_SOVIET_AIRCRAFT_DRILL = {
    optionsToShow: 5,
    numberOfQuestions: 20,
    distances: ['near'],
    profiles: ['top'],
    optics: ['naked eye'],
    platforms: ['aircraft'],
    originalValues: ['MiG-3', 'Yak-1', 'LaGG 3', 'La-5'],
    randomizeQuestions: true
};
