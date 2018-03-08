import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreComponent } from './score.component';
import { HeaderNarrowComponent } from '../../header-narrow/header-narrow.component';
import { FooterComponent } from '../../footer/footer.component';
import { TopNavComponent } from '../../top-nav/top-nav.component';

import { VehicleService } from '../../vehicle.service';
import { QuizService } from '../quiz/quiz.service';
import { GameStateService } from '../state/game-state.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { FIVE_VEHICLES, LUCHS, CHALLENGER2 } from '../../mock-vehicles';
import { Vehicle } from '../../vehicle';
import { QuizParms } from '../quiz-parms';

describe('ScoreComponent', () => {
  let component: ScoreComponent;
  let fixture: ComponentFixture<ScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent],
      providers: [QuizService,
        {
          provide: VehicleService,
          useClass: MockVehicleService
        }
      ]
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
  constructor() { }
  getVehicles(): Observable<Vehicle[]> {
    return of(FIVE_VEHICLES);
  }
}
