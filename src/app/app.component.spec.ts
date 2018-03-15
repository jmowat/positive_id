import { TestBed, async } from '@angular/core/testing';

import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { HeaderBannerComponent } from './layout/header-banner/header-banner.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { HeaderNarrowComponent } from './layout/header-narrow/header-narrow.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { BrowseComponent } from './browse/browse.component';
import { BrowseFormComponent } from './browse-form/browse-form.component';
import { PaginationComponent } from './pagination/pagination.component';
import { QuizComponent } from './quiz-main/quiz/quiz.component';
import { ScoreComponent } from './quiz-main/score/score.component';
import { RedoQuizComponent } from './quiz-main/quiz/redo-quiz.component';
import { FocusDirective } from './quiz-main/quiz/focus.directive';
import { CustomMinDirective } from './custom-min-validator.directive';

import { PlatformComponent } from './quiz-main/wizard/platform/platform.component';
import { EraComponent } from './quiz-main/wizard/era/era.component';
import { SideComponent } from './quiz-main/wizard/side/side.component';
import { DistanceComponent } from './quiz-main/wizard/distance/distance.component';
import { OpticsComponent } from './quiz-main/wizard/optics/optics.component';
import { PerspectivesComponent } from './quiz-main/wizard/perspectives/perspectives.component';
import { SummaryComponent } from './quiz-main/wizard/summary/summary.component';
import { QuizParmDisplayComponent } from './quiz-main/wizard/quiz-parm-display/quiz-parm-display.component';
import { VehicleSelectionComponent } from './quiz-main/wizard/vehicle-selection/vehicle-selection.component';
import { QuizBuilderComponent } from './quiz-main/builder/quiz-builder/quiz-builder.component';

import { NameFilterPipe } from './name-filter.pipe';
import { Vehicle } from './vehicle';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, AboutComponent, BrowseFormComponent, ContactComponent, MainComponent, PrivacyComponent, TermsComponent,
        HeaderNarrowComponent, FooterComponent, BrowseComponent, HeaderBannerComponent, TopNavComponent, PaginationComponent,
        NameFilterPipe, QuizComponent, ScoreComponent, RedoQuizComponent, FocusDirective, QuizParmDisplayComponent,
        VehicleSelectionComponent, PlatformComponent, EraComponent, SideComponent, DistanceComponent, OpticsComponent,
        PerspectivesComponent, SummaryComponent, CustomMinDirective, QuizBuilderComponent
      ],
      imports: [AppRoutingModule, FormsModule, NgbModule.forRoot()],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
