import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsComponent } from './terms.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutModule } from '../layout/layout.module';

describe('TermsComponent', () => {
  let component: TermsComponent;
  let fixture: ComponentFixture<TermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [],
      imports: [LayoutModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
