import { TestBed, inject } from '@angular/core/testing';

import { WizardService } from './wizard.service';
import { VehicleService } from '../../vehicle.service';
import { of } from 'rxjs/observable/of';
import { FIVE_VEHICLES, LUCHS, CHALLENGER2 } from '../../mock-vehicles';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from '../../vehicle';

describe('WizardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WizardService,
        {
          provide: VehicleService,
          useClass: MockVehicleService
        },
      ]
    });
  });

  it('should be created', inject([WizardService], (service: WizardService) => {
    expect(service).toBeTruthy();
  }));
});

class MockVehicleService {
  constructor() { }
  getVehicles(): Observable<Vehicle[]> {
    return of(FIVE_VEHICLES);
  }
}
