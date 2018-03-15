import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceComponent } from './distance.component';
import { HeaderNarrowComponent } from '../../../layout/header-narrow/header-narrow.component';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { TopNavComponent } from '../../../layout/top-nav/top-nav.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VehicleService } from '../../../vehicle.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs/observable/of';
import { Vehicle } from '../../../vehicle';
import { WizardService } from '../wizard.service';
import { FIVE_VEHICLES, LUCHS, CHALLENGER2 } from '../../../mock-vehicles';
import { GrammarHelper } from '../../grammar-helper';
import { QuizParmDisplayComponent } from '../quiz-parm-display/quiz-parm-display.component';
import { QuizParms } from '../../game/quiz-parms';
import { GameBuilderStateService } from '../state/game-builder-state.service';
import { DebugElement } from '@angular/core';

describe('DistanceComponent', () => {
  let component: DistanceComponent;
  let fixture: ComponentFixture<DistanceComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const locationSpy = jasmine.createSpyObj('Location', ['back']);
  const testVehicle = new Vehicle();
  let gameBuilderStateSpy;
  let gameBuilderStateService: GameBuilderStateService;
  let debugElement: DebugElement;

  testVehicle.images = [{
    img_lg: '', img_sm: '', perspective: '', optics: '', classification: '',
    distance: 'near', source: ''},
    {
      img_lg: '', img_sm: '', perspective: '', optics: '', classification: '',
      distance: 'far', source: ''}];

  const vehicleServiceStub = {
    getVehicles: () => Observable.of([testVehicle])
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DistanceComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent, QuizParmDisplayComponent],
      providers: [ GameBuilderStateService,
        {
          provide: Router,
          useValue: routerSpy
        },
        {
          provide: VehicleService,
          useValue: vehicleServiceStub
        },
        {
          provide: WizardService,
          useClass: MockWizardService
        },
        {
          provide: Location,
          useValue: locationSpy
        }],
      imports: [FormsModule]
    })
      .compileComponents();
      fixture = TestBed.createComponent(DistanceComponent);
      debugElement = fixture.debugElement;
      gameBuilderStateService = debugElement.injector.get(GameBuilderStateService);
      gameBuilderStateSpy = spyOn(gameBuilderStateService, 'getTitle').and.returnValue('a title');
      gameBuilderStateSpy = spyOn(gameBuilderStateService, 'getType').and.returnValue('quiz');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockWizardService extends WizardService {
  getData() {
    const testVehicle = new Vehicle();
    testVehicle.images = [{
      img_lg: '', img_sm: '', perspective: '', optics: '', classification: '',
      distance: 'near', source: ''},
      {
        img_lg: '', img_sm: '', perspective: '', optics: '', classification: '',
        distance: 'far', source: ''}];
    return [testVehicle];
  }

  getQuizParms() {
    return {
      platforms: ['ground vehicles'],
      optionsToShow: 5,
      randomizeQuestions: true,
      numberOfQuestions: 5,
      profiles: [''],
      distances: [''],
      optics: [''],
      sides: [''],
      eras: ['']
    };
  }
}
