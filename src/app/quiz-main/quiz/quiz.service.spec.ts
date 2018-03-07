import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { QuizService } from './quiz.service';
import { Test } from '../test';
import { Quiz } from '../quiz';
import { Drill } from '../drill';
import { VehicleService } from '../../vehicle.service';
import { Vehicle } from '../../vehicle';
import { FIVE_VEHICLES, LUCHS, CHALLENGER2 } from '../../mock-vehicles';

describe('QuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizService,
        {
          provide: VehicleService,
          useClass: MockVehicleService
        }
      ]
    });
  });

  it('should be created', inject([QuizService], (service: QuizService) => {
    expect(service).toBeTruthy();
  }));

  it('should not create a quiz by default', inject([QuizService], (service: QuizService) => {
    let t: Test;
    t = service.getTest();
    expect(t).toBeFalsy();
    expect(t instanceof Quiz).toBeFalsy();
    expect(t instanceof Drill).toBeFalsy();
  }));

  describe('Quiz test in QuizService', () => {
    let quiz: Test;
    beforeEach(inject([QuizService], (service: QuizService) => {
      service.createNewTest({
        optionsToShow: 5,
        numberOfQuestions: 10,
        platforms: ['ground vehicle'],
        profiles: ['side', 'front', 'oblique'],
        distances: ['near'],
        optics: ['naked eye'],
        sides: ['eastern', 'western'],
        randomizeQuestions: true
      });
      quiz = service.getTest();
    }));

    it('should have 5 quiz questions when passed enough vehicles and numberOfQuestions set to 5', () => {
      expect(quiz.questions.length).toEqual(5);
      expect(quiz.getNumberOfQuestions()).toEqual(5);
    });

    it('should start on question 0', () => {
      expect(quiz.getCurrentQuestionIndex()).toEqual(0);
    });

    it('should have 5 possible answers as specified by optionsToShow', () => {
      expect(quiz.getQuestion().getPossibleAnswers().length).toBe(5);
    });
  });
});

class MockVehicleService {
  constructor() { }
  getVehicles(): Observable<Vehicle[]> {
    return of(FIVE_VEHICLES);
  }
}
