import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { QuizComponent } from './quiz.component';
import { HeaderNarrowComponent } from '../../header-narrow/header-narrow.component';
import { FooterComponent } from '../../footer/footer.component';
import { TopNavComponent } from '../../top-nav/top-nav.component';
import { VehicleService }  from '../../vehicle.service';
import { QuizService }  from '../quiz/quiz.service';
import { StateService }  from '../state/state.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { FIVE_VEHICLES, LUCHS, CHALLENGER2 } from '../../mock-vehicles';
import { Vehicle } from '../../vehicle';
import { QuizParms }  from '../quiz-parms';
import { DEFAULT_GROUND_QUIZ, TEST_PARMS } from '../test-parms';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent ],
      providers: [QuizService, StateService,
      {
          provide: Router,
          useValue: routerSpy
      },
      {
        provide: VehicleService,
        useClass: MockVehicleService
      },
      {
        provide: TEST_PARMS,
        useValue: DEFAULT_GROUND_QUIZ
      }],
      imports: [ NgbModule.forRoot(), FormsModule ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockVehicleService {
  constructor() {}
  getVehicles(): Observable<Vehicle[]> {
    return of(FIVE_VEHICLES);
  }
}