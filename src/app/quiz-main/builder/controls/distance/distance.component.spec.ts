import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DistanceComponent } from './distance.component';

describe('DistanceComponent', () => {
  let component: DistanceComponent;
  let fixture: ComponentFixture<DistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanceComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
