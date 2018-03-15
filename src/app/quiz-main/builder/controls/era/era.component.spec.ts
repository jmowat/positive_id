import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { EraComponent } from './era.component';

describe('EraComponent', () => {
  let component: EraComponent;
  let fixture: ComponentFixture<EraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EraComponent ],
      imports: [ FormsModule ]
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
