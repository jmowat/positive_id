import { Router } from '@angular/router';

export class BuilderState {
  title: string;
  name: string;

  constructor() {
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
}
