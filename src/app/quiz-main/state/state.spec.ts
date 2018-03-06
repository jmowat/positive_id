import { TestBed, inject } from '@angular/core/testing';

import { State, BaseState, InvalidState, SuccessNextState } from './state';
import { Context } from './context';
import { Router } from '@angular/router';

describe('State', () => {
  let context: Context;
  let quiz;

  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        {
          provide: Router,
          useValue: routerSpy
        }]
    });
  });


  beforeEach(() => {
    quiz = new MockQuiz();
    context = new Context();
  });

  it('should create', inject([Router], (router: Router) => {
    expect(new State()).toBeTruthy();
  }));

  it('should kick things off with a context', () => {
    expect(context).toBeTruthy();
  });

  it('should show success if next clicked with blank, number used to select right answer, and enter used to continue',
    inject([Router], (router: Router) => {
      const startingState = new BaseState();
      context.goNext(undefined, quiz, router);
      expect(context.current instanceof InvalidState).toBeTruthy();
      context.goNext('any', quiz, router);
      expect(context.current instanceof SuccessNextState).toBeTruthy();
      context.goNext(undefined, quiz, router);
      expect(context.current instanceof BaseState).toBeTruthy();
    }));

  // Since state requires an active service, most of the testing will be done in StateService
});

class MockQuiz {
  constructor() { }
  getQuestion() {
    return new MockQuizQuestion();
  }

  onLastQuestion() {
    return false;
  }

  nextQuestion() {
    return this;
  }
}

class MockQuizQuestion {
  constructor() { }
  getName() {
    return 'any';
  }
}
