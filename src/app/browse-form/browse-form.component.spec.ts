import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  let mockVehicles = [

{
  "name": "ASLAV",
  "side": ["western"],
  "type": "ground vehicle",
  "class": "armored personnel carrier",
  "nationality": ["Australia", "Canada"],
  "era": ["modern"],
  "image_dir": "img/ground/aslav",
  "images": [{
    "img_lg": "1.png",
    "img_sm": "1sm.png",
    "perspective": "side",
    "optics": "naked eye",
    "classification": "computer",
    "distance": "near",
    "source": "Steel Beasts"
  }, {
    "img_lg": "2.png",
    "img_sm": "2sm.png",
    "perspective": "front",
    "optics": "naked eye",
    "classification": "computer",
    "distance": "near",
    "source": "Steel Beasts"
  }, {
    "img_lg": "3.png",
    "img_sm": "3sm.png",
    "perspective": "oblique",
    "optics": "naked eye",
    "classification": "computer",
    "distance": "near",
    "source": "Steel Beasts"
  }, {
    "img_lg": "4.png",
    "img_sm": "4sm.png",
    "perspective": "rear",
    "optics": "naked eye",
    "classification": "computer",
    "distance": "near",
    "source": "Steel Beasts"
  },{
    "img_lg": "5.png",
    "img_sm": "5sm.png",
    "perspective": "side",
    "optics": "naked eye",
    "classification": "computer",
    "distance": "far",
    "source": "Steel Beasts"
  },{
    "img_lg": "6.png",
    "img_sm": "6sm.png",
    "perspective": "side",
    "optics": "thermal",
    "classification": "computer",
    "distance": "near",
    "source": "Steel Beasts"
  },{
    "img_lg": "7.png",
    "img_sm": "7sm.png",
    "perspective": "front",
    "optics": "thermal",
    "classification": "computer",
    "distance": "near",
    "source": "Steel Beasts"
  },{
    "img_lg": "8.png",
    "img_sm": "8sm.png",
    "perspective": "side",
    "optics": "thermal",
    "classification": "computer",
    "distance": "far",
    "source": "Steel Beasts"
  }]
},{
  "name": "BM-21",
  "side": ["eastern"],
  "type": "ground vehicle",
  "class": "multiple rocket launcher",
  "nationality": ["Russia", "Soviet Union"],
  "era": ["cold war","modern"],
  "image_dir": "img/ground/bm21",
  "images": [{
    "img_lg": "1.png",
    "img_sm": "1sm.png",
    "perspective": "side",
    "optics": "naked eye",
    "classification": "computer",
    "distance": "near",
    "source": "Steel Beasts"
  }, {
    "img_lg": "2.png",
    "img_sm": "2sm.png",
    "perspective": "front",
    "optics": "naked eye",
    "classification": "computer",
    "distance": "near",
    "source": "Steel Beasts"
  }, {
    "img_lg": "3.png",
    "img_sm": "3sm.png",
    "perspective": "oblique",
    "optics": "naked eye",
    "classification": "computer",
    "distance": "near",
    "source": "Steel Beasts"
  }, {
    "img_lg": "4.png",
    "img_sm": "4sm.png",
    "perspective": "rear",
    "optics": "naked eye",
    "classification": "computer",
    "distance": "near",
    "source": "Steel Beasts"
  },{
    "img_lg": "5.png",
    "img_sm": "5sm.png",
    "perspective": "side",
    "optics": "naked eye",
    "classification": "computer",
    "distance": "far",
    "source": "Steel Beasts"
  },{
    "img_lg": "6.png",
    "img_sm": "6sm.png",
    "perspective": "side",
    "optics": "thermal",
    "classification": "computer",
    "distance": "near",
    "source": "Steel Beasts"
  },{
    "img_lg": "7.png",
    "img_sm": "7sm.png",
    "perspective": "front",
    "optics": "thermal",
    "classification": "computer",
    "distance": "near",
    "source": "Steel Beasts"
  },{
    "img_lg": "8.png",
    "img_sm": "8sm.png",
    "perspective": "side",
    "optics": "thermal",
    "classification": "computer",
    "distance": "far",
    "source": "Steel Beasts"
  }]
}

  ]
});