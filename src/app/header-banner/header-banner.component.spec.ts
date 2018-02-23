import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBannerComponent } from './header-banner.component';
import { TopNavComponent } from '../top-nav/top-nav.component';

describe('HeaderBannerComponent', () => {
  let component: HeaderBannerComponent;
  let fixture: ComponentFixture<HeaderBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBannerComponent, TopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
