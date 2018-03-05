import { Injectable } from '@angular/core';
import { QuizParms } from '../quiz-parms';

@Injectable()
export class TestParmsService {
    testParms: QuizParms;
    constructor() {
      console.log('Created TestParmsService');
    }

    setTestParms(parms: QuizParms) {
      this.testParms = parms;
    }

    getParms() {
      // maybe return DEFAULT_GROUND_QUIZ if nothing specified
      return this.testParms;
    }

    DEFAULT_GROUND_QUIZ() {
        return {
            optionsToShow: 5,
            numberOfQuestions: 10,
            platforms: ['ground vehicle'],
            profiles: ['side', 'front', 'oblique'],
            distances: ['near'],
            optics: ['naked eye'],
            sides: ['eastern', 'western'],
            randomizeQuestions: true
        }
    }

    THERMALS_GROUND_QUIZ() {
        return {
        optionsToShow: 5,
        numberOfQuestions: 20,
        platforms: ['ground vehicle'],
        profiles: ['side', 'front', 'oblique'],
        distances: ['near'],
        optics: ['thermal'],
        sides: ['eastern', 'western'],
        randomizeQuestions: true
        }
    }

    FAR_GROUND_QUIZ() {
        return {
            optionsToShow: 5,
            numberOfQuestions: 20,
            platforms: ['ground vehicle'],
            profiles: ['side', 'front', 'oblique'],
            distances: ['far'],
            optics: ['naked eye'],
            sides: ['eastern', 'western'],
            randomizeQuestions: true
        }
    }

    EASTERN_GROUND_QUIZ() {
        return {
            optionsToShow: 5,
            numberOfQuestions: 20,
            platforms: ['ground vehicle'],
            profiles: ['side', 'front', 'oblique'],
            distances: ['near'],
            optics: ['naked eye'],
            sides: ['eastern'],
            randomizeQuestions: true
        }
    }

    WESTERN_GROUND_QUIZ() {
        return {
            optionsToShow: 5,
            numberOfQuestions: 20,
            platforms: ['ground vehicle'],
            profiles: ['side', 'front', 'oblique'],
            distances: ['near'],
            optics: ['naked eye'],
            sides: ['western'],
            randomizeQuestions: true
        }
    }

    REAR_GROUND_QUIZ() {
        return {
            optionsToShow: 5,
            numberOfQuestions: 20,
            platforms: ['ground vehicle'],
            profiles: ['rear'],
            distances: ['near'],
            optics: ['naked eye'],
            sides: ['western', 'eastern'],
            randomizeQuestions: true
        }
    }

    WW2_AIRCRAFT_QUIZ() {
        return {
            optionsToShow: 5,
            numberOfQuestions: 10,
            distances: ['near'],
            optics: ['naked eye'],
            platforms: ['aircraft'],
            eras: ['world war ii'],
            randomizeQuestions: true
        }
    }

    WESTERN_AIRCRAFT_QUIZ() {
        return {
            optionsToShow: 5,
            numberOfQuestions: 10,
            distances: ['near'],
            profiles: ['side', 'front', 'oblique', 'top'],
            optics: ['naked eye'],
            platforms: ['aircraft'],
            sides: ['western'],
            randomizeQuestions: true
        }
    }

    EASTERN_AIRCRAFT_QUIZ() {
        return {
            optionsToShow: 5,
            numberOfQuestions: 10,
            distances: ['near'],
            profiles: ['side', 'front', 'oblique', 'top'],
            optics: ['naked eye'],
            platforms: ['aircraft'],
            sides: ['eastern'],
            randomizeQuestions: true
        }
    }

    FAR_MODERN_AIRCRAFT_QUIZ() {
        return {
            optionsToShow: 5,
            numberOfQuestions: 20,
            distances: ['far'],
            profiles: ['side', 'oblique'],
            optics: ['naked eye'],
            platforms: ['aircraft'],
            sides: ['eastern', 'western'],
            randomizeQuestions: true
        }
    }

    WW2_AIRCRAFT_FAR_DRILL() {
        return {
            optionsToShow: 5,
            numberOfQuestions: 12,
            distances: ['far'],
            profiles: ['side', 'oblique'],
            optics: ['naked eye'],
            platforms: ['aircraft'],
            originalValues: ['MiG-3', 'Yak-1', 'LaGG 3', 'P-40'],
            randomizeQuestions: true
        }
    }

    WW2_SOVIET_AIRCRAFT_DRILL() {
        return {
            optionsToShow: 5,
            numberOfQuestions: 20,
            distances: ['near'],
            profiles: ['top'],
            optics: ['naked eye'],
            platforms: ['aircraft'],
            originalValues: ['MiG-3', 'Yak-1', 'LaGG 3', 'La-5'],
            randomizeQuestions: true
        }
    }
}
