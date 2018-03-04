import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {Type} from '@angular/core';
import {ActivatedRoute,Route,ActivatedRouteSnapshot,UrlSegment,Params,Data,ParamMap } from '@angular/router';

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
import { FocusDirective } from './focus.directive';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async(() => {
    let mockActivatedRoute = new ActivatedRoute();
    mockActivatedRoute.snapshot =  new MockActivatedRouteSnapshot();
    mockActivatedRoute.snapshot.data = DEFAULT_GROUND_QUIZ;

    TestBed.configureTestingModule({
      declarations: [ QuizComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent, FocusDirective ],
      providers: [QuizService, StateService,
      {
          provide: Router,
          useValue: routerSpy
      },
      {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute
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

  xit('should give the radio box focus when user keys a number for their selection',() => {
    // Nasty bug that results in double-entries on enter keypress after user selects a value with keyboard
  })
});

class MockVehicleService {
  constructor() {}
  getVehicles(): Observable<Vehicle[]> {
    return of(FIVE_VEHICLES);
  }
}

class MockActivatedRoute implements ActivatedRoute{
    snapshot : ActivatedRouteSnapshot;
    url : Observable<UrlSegment[]>;
    params : Observable<Params>;
    queryParams : Observable<Params>;
    fragment : Observable<string>;
    data : Observable<Data>;
    outlet : string;
    component : Type<any>|string;
    routeConfig : Route;
    root : ActivatedRoute;
    parent : ActivatedRoute;
    firstChild : ActivatedRoute;
    children : ActivatedRoute[];
    pathFromRoot : ActivatedRoute[];
    paramMap: Observable<ParamMap>;
    queryParamMap: Observable<ParamMap>;
    toString() : string{
        return "";
    };
}

class MockActivatedRouteSnapshot implements ActivatedRouteSnapshot {
  routeConfig: Route | null;
  url: UrlSegment[];
  params: Params;
  queryParams: Params;
  fragment: string;
  data: Data;
  outlet: string;
  component: Type<any> | string | null;
   root: ActivatedRouteSnapshot
   parent: ActivatedRouteSnapshot | null;
   firstChild: ActivatedRouteSnapshot | null;
   children: ActivatedRouteSnapshot[];
   pathFromRoot: ActivatedRouteSnapshot[];
   paramMap: ParamMap;
   queryParamMap: ParamMap;
  toString(): string {return ""};
}