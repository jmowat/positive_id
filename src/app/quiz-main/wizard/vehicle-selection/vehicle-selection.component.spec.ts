import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSelectionComponent } from './vehicle-selection.component';
import { GameBuilderStateService } from '../state/game-builder-state.service';
import { Router } from '@angular/router';

describe('VehicleSelectionComponent', () => {
  let component: VehicleSelectionComponent;
  let fixture: ComponentFixture<VehicleSelectionComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [GameBuilderStateService,
        {
          provide: Router,
          useValue: routerSpy
        }
      ],
      declarations: [VehicleSelectionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
