import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBannerComponent } from './header-banner.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { Router } from '@angular/router';

describe('HeaderBannerComponent', () => {
  let component: HeaderBannerComponent;
  let fixture: ComponentFixture<HeaderBannerComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderBannerComponent, TopNavComponent],
      providers: [
        {
          provide: Router,
          useValue: routerSpy
        }]
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
