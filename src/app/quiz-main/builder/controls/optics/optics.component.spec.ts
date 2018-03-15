import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { OpticsComponent } from './optics.component';

describe('OpticsComponent', () => {
  let component: OpticsComponent;
  let fixture: ComponentFixture<OpticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpticsComponent ],
      imports: [ FormsModule ]
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
