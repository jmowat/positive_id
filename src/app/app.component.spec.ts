import { TestBed, async } from '@angular/core/testing';

import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_BASE_HREF } from '@angular/common';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { BrowseComponent } from './browse/browse.component';
import { BrowseFormComponent } from './browse-form/browse-form.component';
import { PaginationComponent } from './pagination/pagination.component';
import { QuizComponent } from './quiz-main/quiz/quiz.component';
import { ScoreComponent } from './quiz-main/score/score.component';
import { RedoQuizComponent } from './quiz-main/quiz/redo-quiz.component';
import { FocusDirective } from './quiz-main/quiz/focus.directive';
import { CustomMinDirective } from './custom-min-validator.directive';
import { CustomMaxDirective } from './custom-max-validator.directive';

import { QuizBuilderComponent } from './quiz-main/builder/quiz-builder/quiz-builder.component';
import { DrillBuilderComponent } from './quiz-main/builder/drill-builder/drill-builder.component';

import { LayoutModule } from './layout/layout.module';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { NameFilterPipe } from './name-filter.pipe';
import { Vehicle } from './vehicle';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, BrowseFormComponent, MainComponent, BrowseComponent, PaginationComponent,
        NameFilterPipe, QuizComponent, ScoreComponent, RedoQuizComponent, FocusDirective,
        CustomMinDirective, QuizBuilderComponent, DrillBuilderComponent, CustomMaxDirective
      ],
      imports: [AppRoutingModule, FormsModule, NgbModule.forRoot(), RecaptchaModule.forRoot(),
        LayoutModule, MultiselectDropdownModule, RecaptchaFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
