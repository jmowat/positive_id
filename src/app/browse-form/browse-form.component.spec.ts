import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { fakeAsync } from '@angular/core/testing';
import { tick } from '@angular/core/testing';
import { flush } from '@angular/core/testing';

import { BrowseFormComponent } from './browse-form.component';
import { HeaderNarrowComponent } from '../header-narrow/header-narrow.component';
import { FooterComponent } from '../footer/footer.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { BrowseComponent } from '../browse/browse.component';
import { PaginationComponent } from '../pagination/pagination.component';

import { NameFilterPipe } from '../name-filter.pipe';
import { VehicleService } from '../vehicle.service';

import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from '../vehicle';
import { MIXED } from '../mock-vehicles';

// BUG: setting side and then switching platforms messes up the side filter when you go back to it
describe('BrowseFormComponent', () => {
  let component: BrowseFormComponent;
  let fixture: ComponentFixture<BrowseFormComponent>;
  let componentVehicleService: VehicleService; // the actually injected service
  let vehicleService: VehicleService; // the TestBed injected service

  let resetEl: DebugElement;
  let nameEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseFormComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent, NameFilterPipe,
        BrowseComponent, PaginationComponent],
      imports: [FormsModule, NgbModule.forRoot()],
      providers: [{
        provide: VehicleService,
        useClass: MockVehicleService
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseFormComponent);
    component = fixture.componentInstance;

    // VehicleService actually injected into the component
    vehicleService = fixture.debugElement.injector.get(VehicleService);
    componentVehicleService = vehicleService;
    // VehicleService from the root injector
    vehicleService = TestBed.get(VehicleService);

    resetEl = fixture.debugElement.query(By.css('button#reset'));
    nameEl = fixture.debugElement.query(By.css('input#nameFilter'));

    fixture.detectChanges();
  });

  beforeEach(async(() => {
    // I need this block to run after the component and fixture are created for ngModel changes to be
    // detected properly.
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register ngModel field change', fakeAsync(() => {
    const element = fixture.debugElement.query(By.css('input#nameFilter')).nativeElement;
    element.value = 'test';
    element.dispatchEvent(new Event('input'));
    expect(component.nameFilter).toEqual('test');
  }));

  it('should reset the name field when the reset button is pressed', fakeAsync(() => {
    const element = fixture.debugElement.query(By.css('input#nameFilter')).nativeElement;
    element.value = 'test';
    element.dispatchEvent(new Event('input'));
    expect(component.nameFilter).toEqual('test');
    resetEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    flush();
    expect(element.value).toEqual('');
    expect(component.nameFilter).toEqual('');
  }));

  describe('filter functionality', () => {
    it('should reset side and era on platform change', () => {
      // should return 7 side options on platform change to aircraft
      // default is ground
      expect(component.vehicles.length).toBe(3);
      component.platforms.selectedOption.id = 'aircraft';
      component.onChange();
      expect(component.vehicles.length).toBe(5);
    });
  });
});

class MockVehicleService {
  constructor() { }
  getVehicles(): Observable<Vehicle[]> {
    return of(MIXED);
  }
}
