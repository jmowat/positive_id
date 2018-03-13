import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { HeaderNarrowComponent } from '../header-narrow/header-narrow.component';
import { FooterComponent } from '../footer/footer.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { GameBuilderStateService } from '../quiz-main/wizard/state/game-builder-state.service';
import { Router } from '@angular/router';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent],
      providers: [GameBuilderStateService,
        {
          provide: Router,
          useValue: routerSpy
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
