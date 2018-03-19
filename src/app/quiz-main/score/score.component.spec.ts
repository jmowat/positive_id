import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ScoreComponent } from './score.component';
import { MainComponent } from '../../main/main.component';
import { HeaderNarrowComponent } from '../../layout/header-narrow/header-narrow.component';
import { HeaderBannerComponent } from '../../layout/header-banner/header-banner.component';
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
import { GameFactory } from '../game/game-factory';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {Routes} from '@angular/router';

import { GameParmsService } from '../game/game-parms.service';

describe('ScoreComponent', () => {
  let component: ScoreComponent;
  let fixture: ComponentFixture<ScoreComponent>;
  let router: Router;

  // const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const routes: Routes = [
   { path: 'main', component: MainComponent },
   { path: '', redirectTo: '/main', pathMatch: 'full' },
   { path: '**', redirectTo: '/main' }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent,
        MainComponent, HeaderBannerComponent],
      providers: [
        {
          provide: VehicleService,
          useClass: MockVehicleService
        },
        {
          provide: QuizService,
          useClass: MockQuizService
        }
      ],
      imports: [RouterTestingModule.withRoutes(routes)]
    })
      .compileComponents();


  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to \'/\' if quiz not at end', inject([QuizService], (service: QuizService) => {
    expect(service.getTest().onLastQuestion()).toBeFalsy();
    component.ngOnInit();
  }));
});

class MockVehicleService {
  constructor() { }
  getVehicles(): Observable<Vehicle[]> {
    return of(FIVE_VEHICLES);
  }
}

class MockQuizService {
  constructor() { }

  getTest() {
    return GameFactory.createTest(FIVE_VEHICLES, {
      optionsToShow: 5,
      numberOfQuestions: 5,
      platforms: ['ground vehicle'],
      profiles: ['side', 'front', 'oblique'],
      distances: ['near'],
      optics: ['naked eye'],
      sides: ['eastern', 'western'],
      randomizeQuestions: false
    });
  }
}
