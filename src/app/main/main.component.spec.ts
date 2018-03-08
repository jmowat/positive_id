import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { HeaderBannerComponent } from '../header-banner/header-banner.component';
import { FooterComponent } from '../footer/footer.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { GameParmsService } from '../quiz-main/game/game-parms.service';
import { Router } from '@angular/router';
import { GameBuilderStateService } from '../quiz-main/wizard/state/game-builder-state.service';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent, HeaderBannerComponent, FooterComponent, TopNavComponent],
      providers: [GameParmsService, GameBuilderStateService,
        {
          provide: Router,
          useValue: routerSpy
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
