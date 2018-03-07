import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizParmDisplayComponent } from './quiz-parm-display.component';
import { VehicleService } from '../../../vehicle.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs/observable/of';
import { Vehicle } from '../../../vehicle';
import { WizardService } from '../wizard.service';
import { FIVE_VEHICLES, LUCHS, CHALLENGER2 } from '../../../mock-vehicles';
import { GrammarHelper } from '../../grammar-helper';
import { QuizParms } from '../../quiz-parms';

describe('QuizParmDisplayComponent', () => {
  let component: QuizParmDisplayComponent;
  let fixture: ComponentFixture<QuizParmDisplayComponent>;

  const vehicleServiceStub = {
    getVehicles: () => Observable.of([new Vehicle()])
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuizParmDisplayComponent],
      providers: [
        {
          provide: VehicleService,
          useValue: vehicleServiceStub
        },
        {
          provide: WizardService,
          useClass: MockWizardService
        }
      ],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizParmDisplayComponent);
    component = fixture.componentInstance;
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
      numberOfQuestions: 5
    };
  }
}
