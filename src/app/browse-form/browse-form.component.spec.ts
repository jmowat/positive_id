import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DebugElement } from '@angular/core';
import { By }           from '@angular/platform-browser';
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
import { VehicleService }  from '../vehicle.service';

import { Observable } from 'rxjs/Rx';
import { Vehicle }  from '../vehicle';

describe('BrowseFormComponent', () => {
  let component: BrowseFormComponent;
  let fixture: ComponentFixture<BrowseFormComponent>;
  let componentVehicleService: VehicleService; // the actually injected service
  let vehicleService: VehicleService; // the TestBed injected service

  let resetEl: DebugElement;
  let nameEl: DebugElement;

  let vehicleServiceStub: {
    getVehicles(): Observable<Vehicle[]>;
  };

  beforeEach(async(() => {
    // stub VehicleService for test purposes
    vehicleServiceStub = {
      getVehicles: () => Observable.of([new Vehicle()])
    };

    TestBed.configureTestingModule({
      declarations: [ BrowseFormComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent, NameFilterPipe,
      BrowseComponent, PaginationComponent ],
      imports: [ FormsModule, NgbModule.forRoot() ],
      providers: [{provide: VehicleService, useValue: vehicleServiceStub }]
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

  it('should register ngModel field change',fakeAsync(()=>{
    let element = fixture.debugElement.query(By.css('input#nameFilter')).nativeElement;
    element.value = 'test';
    element.dispatchEvent(new Event('input'));
    expect(component.nameFilter).toEqual('test');
  }));

  it('should reset the name field when the reset button is pressed',fakeAsync(()=>{
    let element = fixture.debugElement.query(By.css('input#nameFilter')).nativeElement;
    element.value = 'test';
    element.dispatchEvent(new Event('input'));
    expect(component.nameFilter).toEqual('test');
    resetEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    flush();
    expect(element.value).toEqual('');
    expect(component.nameFilter).toEqual('');
  }));
});