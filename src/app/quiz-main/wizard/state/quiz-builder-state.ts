import { GrammarHelper } from '../../grammar-helper';
import { QuizBuilderContext } from './quiz-builder-context';
import { Router } from '@angular/router';
import { BuilderState } from './builder-state';

export class QuizBuilderState extends BuilderState {

  name: string;

  constructor() {
    super();
    this.title = 'Quiz Builder';
    this.name = 'State';
    this.type = 'quiz';
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
}

export class PlatformSelectionState extends QuizBuilderState {
  constructor() {
    super();
    this.introText = `You have chosen to create a custom quiz. Limited by filter
    criteria that you specify here, you will be shown each qualifying vehicle at
    least once. This test is ideal for quickly becoming familiar with large groups
    of vehicles or testing your overall knowledge.`;
    this.name = 'PlatformSelectionState';
  }

  goNext(context, router: Router) {
    context.setState(new EraSelectionState());
    router.navigateByUrl('/era');
  }

  goPrevious(context, router: Router) {
    // not implemented
  }
}

export class EraSelectionState extends QuizBuilderState {
  constructor() {
    super();
    this.name = 'EraSelectionState';
  }

  goNext(context, router: Router) {
    context.setState(new SideSelectionState());
    router.navigateByUrl('/side');
  }

  goPrevious(context, router: Router) {
    context.setState(new PlatformSelectionState());
    router.navigateByUrl('/platform');
  }
}

export class SideSelectionState extends QuizBuilderState {
  constructor() {
    super();
    this.name = 'SideSelectionState';
  }

  goNext(context, router: Router) {
    context.setState(new DistanceSelectionState());
    router.navigateByUrl('/distance');
  }

  goPrevious(context, router: Router) {
    context.setState(new EraSelectionState());
    router.navigateByUrl('/era');
  }
}

export class DistanceSelectionState extends QuizBuilderState {
  constructor() {
    super();
    this.name = 'DistanceSelectionState';
  }

  goNext(context, router: Router) {
    context.setState(new OpticsSelectionState());
    router.navigateByUrl('/optics');
  }

  goPrevious(context, router: Router) {
    context.setState(new SideSelectionState());
    router.navigateByUrl('/side');
  }
}

export class OpticsSelectionState extends QuizBuilderState {
  constructor() {
    super();
    this.name = 'OpticsSelectionState';
  }

  goNext(context, router: Router) {
    context.setState(new PerspectivesSelectionState());
    router.navigateByUrl('/perspectives');
  }

  goPrevious(context, router: Router) {
    context.setState(new DistanceSelectionState());
    router.navigateByUrl('/distance');
  }
}

export class PerspectivesSelectionState extends QuizBuilderState {
  constructor() {
    super();
    this.name = 'PerspectivesSelectionState';
  }

  goNext(context, router: Router) {
    context.setState(new SummaryState());
    router.navigateByUrl('/summary');
  }

  goPrevious(context, router: Router) {
    context.setState(new OpticsSelectionState());
    router.navigateByUrl('/optics');
  }
}

export class SummaryState extends QuizBuilderState {
  constructor() {
    super();
    this.nextLabel = 'Take Quiz!';
    this.maxQuestionsText = `Feel free to limit the number of questions, or accept the
      default for every available platform that matches your selected criteria.`;
    this.name = 'SummaryState';
  }

  goNext(context, router: Router) {
    // reset to platform for when the user returns
    context.setState(new PlatformSelectionState());
    router.navigateByUrl('/quiz');
  }

  goPrevious(context, router: Router) {
    context.setState(new PerspectivesSelectionState());
    router.navigateByUrl('/perspectives');
  }
}
