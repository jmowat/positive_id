import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformComponent } from './platform.component';
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
import { GrammarHelper } from '../../grammar-helper';
import { QuizParmDisplayComponent } from '../quiz-parm-display/quiz-parm-display.component';
import { QuizParms } from '../../game/quiz-parms';

describe('PlatformComponent', () => {
  let component: PlatformComponent;
  let fixture: ComponentFixture<PlatformComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const locationSpy = jasmine.createSpyObj('Location', ['back']);
  const vehicleServiceStub = {
    getVehicles: () => Observable.of([new Vehicle()])
  };

  const dummyParms: QuizParms = {
    platforms: ['ground vehicles'],
    optionsToShow: 5,
    randomizeQuestions: true,
    numberOfQuestions: 5
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent, QuizParmDisplayComponent],
      providers: [WizardService,
        {
          provide: VehicleService,
          useClass: MockVehicleService
        },
        {
          provide: Router,
          useValue: routerSpy
        },
        {
          provide: VehicleService,
          useValue: vehicleServiceStub
        },
        {
          provide: Location,
          useValue: locationSpy
        }],
        imports: [ FormsModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockVehicleService {
  constructor() { }
  getVehicles(): Observable<Vehicle[]> {
    return of(FIVE_VEHICLES);
  }
}

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
