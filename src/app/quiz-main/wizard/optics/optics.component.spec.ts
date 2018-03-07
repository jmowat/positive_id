import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpticsComponent } from './optics.component';
import { HeaderNarrowComponent } from '../../../header-narrow/header-narrow.component';
import { FooterComponent } from '../../../footer/footer.component';
import { TopNavComponent } from '../../../top-nav/top-nav.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VehicleService } from '../../../vehicle.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs/observable/of';
import { Vehicle } from '../../../vehicle';
import { WizardService } from '../wizard.service';
import { FIVE_VEHICLES, LUCHS, CHALLENGER2 } from '../../../mock-vehicles';

describe('OpticsComponent', () => {
  let component: OpticsComponent;
  let fixture: ComponentFixture<OpticsComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const locationSpy = jasmine.createSpyObj('Location', ['back']);
  const testVehicle = new Vehicle();
  testVehicle.images = [{
    img_lg: '', img_sm: '', perspective: '', optics: 'naked eye', classification: '',
    distance: 'near', source: ''},
    {
      img_lg: '', img_sm: '', perspective: '', optics: 'thermals', classification: '',
      distance: 'far', source: ''}];
  const vehicleServiceStub = {
    getVehicles: () => Observable.of([testVehicle])
  };

  const wizardServiceStub = {
    getData: () => ([testVehicle])
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpticsComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent],
      providers: [
        {
          provide: Router,
          useValue: routerSpy
        },
        {
          provide: VehicleService,
          useValue: vehicleServiceStub
        },
        {
          provide: WizardService,
          useValue: wizardServiceStub
        },
        {
          provide: Location,
          useValue: locationSpy
        }],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
