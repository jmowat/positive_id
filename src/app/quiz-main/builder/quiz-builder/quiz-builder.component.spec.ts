import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBuilderComponent } from './quiz-builder.component';
import { HeaderNarrowComponent } from '../../../header-narrow/header-narrow.component';
import { FooterComponent } from '../../../footer/footer.component';
import { TopNavComponent } from '../../../top-nav/top-nav.component';

describe('QuizBuilderComponent', () => {
  let component: QuizBuilderComponent;
  let fixture: ComponentFixture<QuizBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizBuilderComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
