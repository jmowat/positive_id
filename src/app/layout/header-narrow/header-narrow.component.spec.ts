import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNarrowComponent } from './header-narrow.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { GameBuilderStateService } from '../../quiz-main/wizard/state/game-builder-state.service';
import { Router } from '@angular/router';

describe('HeaderNarrowComponent', () => {
  let component: HeaderNarrowComponent;
  let fixture: ComponentFixture<HeaderNarrowComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderNarrowComponent, TopNavComponent],
      providers: [GameBuilderStateService,
        {
          provide: Router,
          useValue: routerSpy
        }]
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
