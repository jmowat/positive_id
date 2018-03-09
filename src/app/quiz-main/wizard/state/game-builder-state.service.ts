import { Injectable } from '@angular/core';

import { QuizBuilderContext } from './quiz-builder-context';
import { BuilderContext } from './builder-context';
import { DrillBuilderContext } from './drill-builder-context';
import { Router } from '@angular/router';

@Injectable()
export class GameBuilderStateService {
  context: BuilderContext;

  constructor(private router: Router) {
    // console.log('initialize GameBuilderStateService');
  }

  next() {
    this.context.goNext(this.router);
  }

  previous() {
    this.context.goPrevious(this.router);
  }

  setContext(context: BuilderContext) {
    // console.log('set context ', context);
    this.context = context;
  }

  getTitle(): string {
    return this.context.current.getTitle();
  }

  getNextLabel(): string {
    return this.context.current.getNextLabel();
  }

  getDefaultMaxQuestions(): number {
    return this.context.current.getDefaultMaxQuestions();
  }
}
