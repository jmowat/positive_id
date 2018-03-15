import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNarrowComponent } from '../../../layout/header-narrow/header-narrow.component';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { TopNavComponent } from '../../../layout/top-nav/top-nav.component';
import { VehicleService } from '../../../vehicle.service';
import { FormsModule } from '@angular/forms';
import { Vehicle } from '../../../vehicle';
import { FIVE_VEHICLES, LUCHS, CHALLENGER2 } from '../../../mock-vehicles';
import { GrammarHelper } from '../../grammar-helper';
import { QuizBuilderComponent } from './quiz-builder.component';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { GameBuilderStateService } from '../../wizard/state/game-builder-state.service';
import { Router } from '@angular/router';

describe('QuizBuilderComponent', () => {
  let component: QuizBuilderComponent;
  let fixture: ComponentFixture<QuizBuilderComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuizBuilderComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent,
      ],
      providers: [GameBuilderStateService,
        {
          provide: VehicleService,
          useClass: MockVehicleService
        },
        {
          provide: Router,
          useValue: routerSpy
        }
      ],
        imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBuilderComponent);
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
