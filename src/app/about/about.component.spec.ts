import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { HeaderNarrowComponent } from '../header-narrow/header-narrow.component';
import { FooterComponent } from '../footer/footer.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { GameBuilderStateService } from '../quiz-main/wizard/state/game-builder-state.service';
import { Router } from '@angular/router';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent,
      ],
      providers: [GameBuilderStateService,
        {
          provide: Router,
          useValue: routerSpy
        }
      ],
      imports: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
