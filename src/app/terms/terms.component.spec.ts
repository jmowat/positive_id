import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsComponent } from './terms.component';
import { HeaderNarrowComponent } from '../header-narrow/header-narrow.component';
import { FooterComponent } from '../footer/footer.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { GameBuilderStateService } from '../quiz-main/wizard/state/game-builder-state.service';
import { Router } from '@angular/router';

describe('TermsComponent', () => {
  let component: TermsComponent;
  let fixture: ComponentFixture<TermsComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TermsComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent],
      providers: [GameBuilderStateService,
        {
          provide: Router,
          useValue: routerSpy
        }]
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
