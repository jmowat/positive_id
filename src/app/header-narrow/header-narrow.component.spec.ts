import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNarrowComponent } from './header-narrow.component';
import { TopNavComponent } from '../top-nav/top-nav.component';

describe('HeaderNarrowComponent', () => {
  let component: HeaderNarrowComponent;
  let fixture: ComponentFixture<HeaderNarrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNarrowComponent, TopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNarrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
