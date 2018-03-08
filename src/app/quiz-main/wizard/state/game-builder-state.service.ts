import { Injectable } from '@angular/core';

import { QuizBuilderContext } from './quiz-builder-context';
import { Router } from '@angular/router';

@Injectable()
export class GameBuilderStateService {
  context: QuizBuilderContext;

  constructor(private router: Router) {
    this.reset();
  }

  next() {
    this.context.goNext(this.router);
  }

  previous() {
    this.context.goPrevious(this.router);
  }

  reset() {
    this.context = new QuizBuilderContext();
  }
}
