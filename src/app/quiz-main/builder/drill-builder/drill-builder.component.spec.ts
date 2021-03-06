import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleService } from '../../../vehicle.service';
import { FormsModule } from '@angular/forms';
import { Vehicle } from '../../../vehicle';
import { FIVE_VEHICLES } from '../../../mock-vehicles';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutModule } from '../../../layout/layout.module';
import { GameParmsService } from '../../../quiz-main/game/game-parms.service';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { DrillBuilderComponent } from './drill-builder.component';

describe('DrillBuilderComponent', () => {
  let component: DrillBuilderComponent;
  let fixture: ComponentFixture<DrillBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillBuilderComponent ],
      providers: [GameParmsService,
        {
          provide: VehicleService,
          useClass: MockVehicleService
        },
      ],
      imports: [ FormsModule, RouterTestingModule, LayoutModule, MultiselectDropdownModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillBuilderComponent);
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
