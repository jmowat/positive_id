import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VehicleService } from './vehicle.service';
import { Vehicle } from './vehicle';

describe('VehicleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([VehicleService], (service: VehicleService) => {
    expect(service).toBeTruthy();
  }));


  it('should fetch a JSON file in an observable', inject([VehicleService], (service: VehicleService) => {
    expect(service).toBeTruthy();
    service.getVehicles().subscribe((vehicles: Vehicle[]) => {
      expect(vehicles.length).toBeTruthy();
    });
  }));

  it('should fetch valid Vehicle objects', inject([VehicleService], (service: VehicleService) => {
    expect(service).toBeTruthy();
    service.getVehicles().subscribe((vehicles: Vehicle[]) => {
      expect(vehicles[0].name).toBeTruthy();
      expect(vehicles[0].nationality).toBeTruthy();
    });
  }));
});
