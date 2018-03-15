import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillBuilderComponent } from './drill-builder.component';

describe('DrillBuilderComponent', () => {
  let component: DrillBuilderComponent;
  let fixture: ComponentFixture<DrillBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillBuilderComponent ]
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
