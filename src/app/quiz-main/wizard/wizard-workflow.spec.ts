import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import { VehicleService } from '../../vehicle.service';
import { WizardService } from './wizard.service';
import { GameBuilderStateService } from './state/game-builder-state.service';

import { PlatformComponent } from './platform/platform.component';
import { EraComponent } from './era/era.component';
import { SideComponent } from './side/side.component';
import { DistanceComponent } from './distance/distance.component';
import { OpticsComponent } from './optics/optics.component';
import { PerspectivesComponent } from './perspectives/perspectives.component';

import { Vehicle } from '../../vehicle';

import { MIXED } from '../../mock-vehicles';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WizardWorkflow', () => {

  let platformComp: PlatformComponent;
  let platformFixture: ComponentFixture<PlatformComponent>;
  let eraComp: EraComponent;
  let eraFixture: ComponentFixture<EraComponent>;
  let sideComp: SideComponent;
  let sideFixture: ComponentFixture<SideComponent>;
  let distanceComp: DistanceComponent;
  let distanceFixture: ComponentFixture<DistanceComponent>;
  let opticsComp: OpticsComponent;
  let opticsFixture: ComponentFixture<OpticsComponent>;
  let perspectivesComp: PerspectivesComponent;
  let perspectivesFixture: ComponentFixture<PerspectivesComponent>;

  let stateServiceStub: Partial<GameBuilderStateService>;

  beforeEach(async(() => {
    stateServiceStub = {
      getType: () => 'quiz',
      getTitle: () => 'title',
      getIntroText: () => 'text',
      next: () => { },
      previous: () => { }
    };

    TestBed.configureTestingModule({
      declarations: [PlatformComponent, EraComponent, SideComponent, DistanceComponent,
        OpticsComponent, PerspectivesComponent],
      providers: [WizardService,
        {
          provide: VehicleService,
          useClass: MockVehicleService
        },
        {
          provide: GameBuilderStateService,
          useValue: stateServiceStub
        }
      ],
      imports: [FormsModule,
        RouterTestingModule.withRoutes(
          [{ path: 'quiz-builder', component: PlatformComponent }]
        )
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    platformFixture = TestBed.createComponent(PlatformComponent);
    platformComp = platformFixture.componentInstance;

    eraFixture = TestBed.createComponent(EraComponent);
    eraComp = eraFixture.componentInstance;

    sideFixture = TestBed.createComponent(SideComponent);
    sideComp = sideFixture.componentInstance;

    distanceFixture = TestBed.createComponent(DistanceComponent);
    distanceComp = distanceFixture.componentInstance;

    opticsFixture = TestBed.createComponent(OpticsComponent);
    opticsComp = opticsFixture.componentInstance;

    perspectivesFixture = TestBed.createComponent(PerspectivesComponent);
    perspectivesComp = perspectivesFixture.componentInstance;
  }));

  it('should have a PlatformComponent', () => {
    expect(platformComp).toBeTruthy();
  });

  it('should retrieve vehicles from the service', inject([WizardService], (wizardSvc: WizardService) => {
    expect(wizardSvc.filteredVehicles).toBeFalsy();
    platformComp.ngOnInit();
    expect(wizardSvc.filteredVehicles).toBeTruthy(); // will contain all vehicles after init
  }));

  it('should handle basic navigation', inject([WizardService], (wizardSvc: WizardService) => {
    platformComp.ngOnInit();
    expect(wizardSvc.filteredVehicles).toBeTruthy(); // will contain all vehicles after init
    expect(wizardSvc.filteredVehicles.length).toBe(8);
    // set the type
    wizardSvc.platforms.selectedOption.id = 'ground vehicle';
    platformComp.next();
    eraComp.ngOnInit();
    expect(wizardSvc.filteredVehicles).toBeTruthy(); // will be filtered at this point
    expect(wizardSvc.filteredVehicles.length).toBe(3);
  }));

  it('should remember the previous stage\'s data on back', inject([WizardService], (wizardSvc: WizardService) => {
    platformComp.ngOnInit();
    expect(wizardSvc.filteredVehicles).toBeTruthy(); // will contain all vehicles after init
    expect(wizardSvc.filteredVehicles.length).toBe(8);
    // set the type
    wizardSvc.platforms.selectedOption.id = 'ground vehicle';
    platformComp.next();
    eraComp.ngOnInit();
    expect(wizardSvc.filteredVehicles).toBeTruthy(); // will be filtered at this point
    expect(wizardSvc.filteredVehicles.length).toBe(3);
    eraComp.back();
    platformComp.ngOnInit();
    expect(wizardSvc.filteredVehicles.length).toBe(8);
  }));

  it('should remember filtered image data on multiple back and next', inject([WizardService], (wizardSvc: WizardService) => {
    platformComp.ngOnInit();
    wizardSvc.platforms.selectedOption.id = 'ground vehicle';
    platformComp.next();
    eraComp.ngOnInit();
    eraComp.next();
    sideComp.ngOnInit();
    sideComp.next();
    distanceComp.ngOnInit();
    distanceComp.next();
    opticsComp.ngOnInit();
    for (const v of wizardSvc.getData()) {
      const img = v.images;
      expect(img.length).toBe(8, 'unfiltered images should be 8');
    }
    wizardSvc.optics.selectedOption.id = 'thermal';
    opticsComp.next();
    // optics will filter vehicle images to those with just thermals
    perspectivesComp.ngOnInit();
    // verify filtered vehicle images
    for (const v of wizardSvc.getData()) {
      const img = v.images;
      expect(img.length).toBe(3, 'only 3 images that are thermals');
    }
    perspectivesComp.back();
    opticsComp.ngOnInit();
    expect(wizardSvc.getData().length).toBe(3);
    for (const v of wizardSvc.getData()) {
      const img = v.images;
      expect(img.length).toBe(8, 'original images after back should be 8');
    }
    // things work here the first time we come back...
    opticsComp.next();
    perspectivesComp.ngOnInit();
    expect(wizardSvc.getData().length).toBe(3);
    // ...and everything looks fine here in perspectives...
    for (const v of wizardSvc.getData()) {
      const img = v.images;
      expect(img.length).toBe(3, 'only 3 images that are thermals the second time around');
    }
    perspectivesComp.back();
    expect(wizardSvc.getData().length).toBe(3);
    // ...but bug happens here! somehow, the vehicles at the optics stage gets changed
    // on second back action
    for (const v of wizardSvc.getData()) {
      const img = v.images;
      expect(img.length).toBe(8, 'original images after back the second time around should still be 8');
    }
  }));
});

class MockVehicleService {
  constructor() { }
  getVehicles(): Observable<Vehicle[]> {
    return of(MIXED);
  }
}
