import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EraComponent } from './era.component';
import { HeaderNarrowComponent } from '../../../header-narrow/header-narrow.component';
import { FooterComponent } from '../../../footer/footer.component';
import { TopNavComponent } from '../../../top-nav/top-nav.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VehicleService } from '../../../vehicle.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Vehicle } from '../../../vehicle';

describe('EraComponent', () => {
  let component: EraComponent;
  let fixture: ComponentFixture<EraComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const locationSpy = jasmine.createSpyObj('Location', ['back']);
  const vehicleServiceStub = {
    getVehicles: () => Observable.of([new Vehicle()])
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EraComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent],
      providers: [VehicleService, {
        provide: Router,
        useValue: routerSpy
      },
        {
          provide: VehicleService,
          useValue: vehicleServiceStub
        },
        {
          provide: Location,
          useValue: locationSpy
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
