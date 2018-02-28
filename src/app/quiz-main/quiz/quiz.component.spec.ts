import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { QuizComponent } from './quiz.component';
import { HeaderNarrowComponent } from '../../header-narrow/header-narrow.component';
import { FooterComponent } from '../../footer/footer.component';
import { TopNavComponent } from '../../top-nav/top-nav.component';
import { VehicleService }  from '../../vehicle.service';
import { QuizService }  from '../quiz.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { FIVE_VEHICLES, LUCHS, CHALLENGER2 } from '../../mock-vehicles';
import { Vehicle } from '../../vehicle';
import { QuizParms }  from '../quiz-parms';
import { DEFAULT_GROUND_QUIZ, DEFAULT_QUIZ_PARMS } from '../default-quiz-parms';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent ],
      providers: [QuizService,
      {
        provide: VehicleService,
        useClass: MockVehicleService
      },
      {
        provide: DEFAULT_QUIZ_PARMS,
        useValue: DEFAULT_GROUND_QUIZ
      }],
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