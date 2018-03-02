import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreComponent } from './score.component';
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

describe('ScoreComponent', () => {
  let component: ScoreComponent;
  let fixture: ComponentFixture<ScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent ],
      providers: [ QuizService,
      {
        provide: VehicleService,
        useClass: MockVehicleService
      },
      {
        provide: TEST_PARMS,
        useValue: DEFAULT_GROUND_QUIZ
      } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreComponent);
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