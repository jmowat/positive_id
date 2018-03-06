import { TestBed, inject } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Test } from '../test';
import { Quiz } from '../quiz';
import { Drill } from '../drill';
import { Vehicle } from '../../vehicle';
import { FIVE_VEHICLES, LUCHS, CHALLENGER2 } from '../../mock-vehicles';
import { DEFAULT_GROUND_QUIZ, TEST_PARMS } from '../../quiz-main/test-parms';
import { State } from './state';
import { Context } from './context';
import { Router, ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';

import { StateService } from './state.service';
import { VehicleService } from '../../vehicle.service';
import { QuizService } from '../quiz/quiz.service';

describe('StateService', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['snapshot.data']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [StateService, QuizService,
        {
          provide: Router,
          useValue: routerSpy
        },
        {
          provide: ActivatedRoute,
          useValue: activatedRouteSpy
        },
        {
          provide: VehicleService,
          useClass: MockVehicleService
        },
        {
          provide: TEST_PARMS,
          useValue: {
            optionsToShow: 5,
            numberOfQuestions: 5,
            platforms: ['ground vehicle'],
            profiles: ['side', 'front', 'oblique'],
            distances: ['near'],
            optics: ['naked eye'],
            sides: ['eastern', 'western'],
            randomizeQuestions: false
          }
        }]
    });
  });

  it('create an instance', inject([StateService], (stateService: StateService) => {
    expect(stateService).toBeTruthy();
  }));

  describe('basic quiz functionality', () => {

    beforeEach(inject([StateService], (service: StateService) => {
      service.createNewTest({
        optionsToShow: 5,
        numberOfQuestions: 5,
        platforms: ['ground vehicle'],
        profiles: ['side', 'front', 'oblique'],
        distances: ['near'],
        optics: ['naked eye'],
        sides: ['eastern', 'western'],
        randomizeQuestions: false
      });
    }));

    it('should detect a correct answer', inject([StateService], (service: StateService) => {
      // console.log('should detect a correct answer',quizService.quiz.questions[0]);
      service.acceptAnswer('T-90');
      expect(service.getStatus()).toBe('success');
      expect(service.getStatusMessage()).toBeTruthy();
      expect(service.getUserSelection()).toBe('T-90');
      expect(service.isSelectionDisabled()).toBeTruthy();
      expect(service.getActionText()).toBe('Next');
    }));

    it('should detect a wrong answer', inject([StateService], (service: StateService) => {
      service.acceptAnswer('xyz');
      expect(service.getStatus()).toBe('danger');
      expect(service.getStatusMessage()).toBeTruthy();
      expect(service.isSelectionDisabled()).toBeFalsy();
      expect(service.getActionText()).toBe('Next');
    }));

    it('should detect an empty answer', inject([StateService], (service: StateService) => {
      service.acceptAnswer('');
      expect(service.getStatus()).toBe('danger');
      expect(service.getStatusMessage()).toBeTruthy();
      expect(service.isSelectionDisabled()).toBeFalsy();
      expect(service.getActionText()).toBe('Next');
    }));

    it('should transition from a correct answer to the next question', inject([StateService], (service: StateService) => {
      expect(service.getTest().getQuestion().getName()).toBe('T-90');
      service.acceptAnswer('T-90');
      expect(service.getStatus()).toBe('success');
      expect(service.getStatusMessage()).toBeTruthy();
      expect(service.getUserSelection()).toBe('T-90');
      expect(service.isSelectionDisabled()).toBeTruthy();
      expect(service.getActionText()).toBe('Next');
      service.acceptAnswer('T-90');
      // Resets the user selection on transition
      expect(service.getStatus()).toBeFalsy();
      expect(service.getStatusMessage()).toBeFalsy();
      expect(service.getUserSelection()).toBeFalsy();
      expect(service.isSelectionDisabled()).toBeFalsy();
      expect(service.getActionText()).toBe('Next');
      expect(service.getTest().getQuestion().getPossibleAnswers().length).toBe(5);
      expect(service.getTest().getCurrentQuestionIndex()).toBe(1);
      expect(service.getTest().getNumberOfQuestions()).toBe(5);
      expect(service.getTest().getQuestion().getName()).toBe('T-80');
    }));

    it('should show Finish after correctly answering the last question', inject([StateService], (service: StateService) => {
      const answers = ['T-90', 'T-80', 'T-72', 'T-62', 'T-55'];
      for (let i = 0; i < answers.length; i++) {
        service.acceptAnswer(answers[i]);
        service.acceptAnswer(answers[i]);
      }
      expect(service.getTest().getCurrentQuestionIndex()).toBe(4);
      expect(service.getActionText()).toBe('Finish');
      expect(service.getTest().getNumRight()).toBe(5);
      expect(service.getTest().getNumWrong()).toBe(0);
    }));

    it('should remember the question answered wrong', inject([StateService], (service: StateService) => {
      expect(service.getTest().getQuestion().getName()).toBe('T-90');
      expect(service.getTest().getNumWrong()).toBe(0);
      service.acceptAnswer('xyz');
      expect(service.getTest().getNumWrong()).toBe(1);
      expect(service.getTest().getWrongQuestions().length).toBe(1);
      expect(service.getTest().getWrongQuestions()[0].getName()).toBe('T-90');
    }));

    it('should not consider an empty selection as being wrong', inject([StateService], (service: StateService) => {
      expect(service.getTest().getNumWrong()).toBe(0);
      service.acceptAnswer('');
      expect(service.getTest().getNumWrong()).toBe(0);
    }));

    it('should not move to next question until correct answer', inject([StateService], (service: StateService) => {
      expect(service.getTest().getCurrentQuestionIndex()).toBe(0);
      service.acceptAnswer('xyz');
      expect(service.getTest().getCurrentQuestionIndex()).toBe(0);
      service.acceptAnswer('xyz');
      expect(service.getTest().getCurrentQuestionIndex()).toBe(0);
      service.acceptAnswer('T-80');
      expect(service.getTest().getCurrentQuestionIndex()).toBe(0);
      expect(service.getTest().getNumWrong()).toBe(1);
      service.acceptAnswer('T-90');
      service.acceptAnswer('T-90');
      expect(service.getTest().getNumWrong()).toBe(1);
      expect(service.getTest().getCurrentQuestionIndex()).toBe(1);
    }));

    it('should remember all of the wrongly answered questions', inject([StateService], (service: StateService) => {
      expect(service.getTest().getNumWrong()).toBe(0);
      service.acceptAnswer('xyz');
      expect(service.getTest().getNumWrong()).toBe(1);
      service.acceptAnswer('T-90');
      service.acceptAnswer('T-90');
      service.acceptAnswer('xyz');
      expect(service.getTest().getNumWrong()).toBe(2);
      service.acceptAnswer('T-80');
      service.acceptAnswer('T-80');

      expect(service.getTest().getWrongQuestions()[0].getName()).toBe('T-90');
      expect(service.getTest().getWrongQuestions()[1].getName()).toBe('T-80');
    }));
  });
});

class MockVehicleService {
  constructor() { }
  getVehicles(): Observable<Vehicle[]> {
    return of(FIVE_VEHICLES);
  }
}

class MockQuizService {
  constructor() { }

  getTest(): Test {
    return undefined;
  }

  createNewTest() {

  }
}
