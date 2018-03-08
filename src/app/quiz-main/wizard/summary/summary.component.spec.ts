import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary.component';
import { HeaderNarrowComponent } from '../../../header-narrow/header-narrow.component';
import { FooterComponent } from '../../../footer/footer.component';
import { TopNavComponent } from '../../../top-nav/top-nav.component';
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
import { GameParmsService } from '../../game/game-parms.service';
import { GrammarHelper } from '../../grammar-helper';
import { QuizParmDisplayComponent } from '../quiz-parm-display/quiz-parm-display.component';
import { QuizParms } from '../../game/quiz-parms';
import { GameBuilderStateService } from '../state/game-builder-state.service';
import { DebugElement } from '@angular/core';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const locationSpy = jasmine.createSpyObj('Location', ['back']);
  let gameBuilderStateSpy;
  let gameBuilderStateService: GameBuilderStateService;
  let debugElement: DebugElement;

  const vehicleServiceStub = {
    getVehicles: () => Observable.of([new Vehicle()])
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent, QuizParmDisplayComponent],
      providers: [ GameParmsService, GameBuilderStateService,
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    gameBuilderStateService = debugElement.injector.get(GameBuilderStateService);
    gameBuilderStateSpy = spyOn(gameBuilderStateService, 'getTitle').and.returnValue('a title');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockWizardService extends WizardService {
  getData() {
    return [new Vehicle()];
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
