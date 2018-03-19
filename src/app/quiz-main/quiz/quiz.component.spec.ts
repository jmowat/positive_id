import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { QuizComponent } from './quiz.component';
import { HeaderNarrowComponent } from '../../layout/header-narrow/header-narrow.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { TopNavComponent } from '../../layout/top-nav/top-nav.component';
import { VehicleService } from '../../vehicle.service';
import { QuizService } from '../quiz/quiz.service';
import { GameStateService } from '../state/game-state.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { FIVE_VEHICLES, LUCHS, CHALLENGER2 } from '../../mock-vehicles';
import { Vehicle } from '../../vehicle';
import { QuizParms } from '../game/quiz-parms';
import { FocusDirective } from './focus.directive';
import { GameParmsService } from '../game/game-parms.service';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [QuizComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent, FocusDirective],
      providers: [QuizService, GameStateService, GameParmsService,
        {
          provide: Router,
          useValue: routerSpy
        },
        {
          provide: VehicleService,
          useClass: MockVehicleService
        }
      ],
      imports: [NgbModule.forRoot()],

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

  xit('should give the radio box focus when user keys a number for their selection', () => {
    // Nasty bug that results in double-entries on enter keypress after user selects a value with keyboard
  });
});

class MockVehicleService {
  constructor() { }
  getVehicles(): Observable<Vehicle[]> {
    return of(FIVE_VEHICLES);
  }
}
