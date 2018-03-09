import { GrammarHelper } from '../../grammar-helper';
import { DrillBuilderContext } from './drill-builder-context';
import { Router } from '@angular/router';
import { BuilderState } from './builder-state';

export class DrillBuilderState extends BuilderState {

  constructor() {
    super();
    this.title = 'Drill Builder';
    this.name = 'drill.DrillBuilderState';
    this.type = 'drill';
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

export class PlatformSelectionState extends DrillBuilderState {
  constructor() {
    super();
    this.introText = `You have chosen to create a custom drill. A drill allows you
    to select the specific vehicles you want to see and will repeat those vehciles
    randomly among themselves. This is an excellent way to practice differentiating
    between targeted vehicles.`;
    this.name = 'drill.PlatformSelectionState';
  }

  goNext(context, router: Router) {
    context.setState(new EraSelectionState());
    router.navigateByUrl('/era');
  }

  goPrevious(context, router: Router) {
    // not implemented
  }
}

export class EraSelectionState extends DrillBuilderState {
  constructor() {
    super();
    this.name = 'drill.EraSelectionState';
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

export class SideSelectionState extends DrillBuilderState {
  constructor() {
    super();
    this.name = 'drill.SideSelectionState';
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

export class DistanceSelectionState extends DrillBuilderState {
  constructor() {
    super();
    this.name = 'drill.DistanceSelectionState';
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

export class OpticsSelectionState extends DrillBuilderState {
  constructor() {
    super();
    this.name = 'drill.OpticsSelectionState';
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

export class PerspectivesSelectionState extends DrillBuilderState {
  constructor() {
    super();
    this.name = 'drill.PerspectivesSelectionState';
  }

  goNext(context, router: Router) {
    context.setState(new VehicleSelectionState());
    router.navigateByUrl('/vehicle-selection');
  }

  goPrevious(context, router: Router) {
    context.setState(new OpticsSelectionState());
    router.navigateByUrl('/optics');
  }
}

export class VehicleSelectionState extends DrillBuilderState {
  constructor() {
    super();
    this.name = 'VehicleSelectionState';
  }

  goNext(context, router: Router) {
    context.setState(new SummaryState());
    router.navigateByUrl('/summary');
  }

  goPrevious(context, router: Router) {
    context.setState(new OpticsSelectionState());
    router.navigateByUrl('/perspectives');
  }
}

export class SummaryState extends DrillBuilderState {
  constructor() {
    super();
    this.nextLabel = 'Take Drill!';
    this.defaultMaxQuestions = 10;
    this.maxQuestionsText = `How many questions do you want in your drill? If you set this number
      high you can expect to see repeats of your selected vehicles, which is great for
      improving your recognition and memorization.`;
    this.name = 'SummaryState';
  }

  goNext(context, router: Router) {
    // reset to platform for when the user returns
    context.setState(new PlatformSelectionState());
    router.navigateByUrl('/quiz');
  }

  goPrevious(context, router: Router) {
    context.setState(new VehicleSelectionState());
    router.navigateByUrl('/vehicle-selection');
  }
}
