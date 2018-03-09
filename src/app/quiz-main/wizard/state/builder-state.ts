import { Router } from '@angular/router';

export class BuilderState {
  title: string;
  name: string;
  nextLabel: string;
  defaultMaxQuestions: number;
  maxQuestionsText: string;

  constructor() {
    this.nextLabel = 'Next';
  }

  goNext(context, router: Router) {
    throw new Error('You have to implement the method goNext!');
  }

  goPrevious(context, router: Router) {
    throw new Error('You have to implement the method goPrevious!');
  }

  getName() {
    return this.name;
  }

  getTitle() {
    return this.title;
  }

  getNextLabel() {
    return this.nextLabel;
  }

  getDefaultMaxQuestions(): number {
      return this.defaultMaxQuestions;
  }

  getMaxQuestionsText() {
    return this.maxQuestionsText;
  }
}
