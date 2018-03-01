import { TestBed, async } from '@angular/core/testing';

import { AppRoutingModule } from './/app-routing.module';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HeaderNarrowComponent } from './header-narrow/header-narrow.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { BrowseComponent } from './browse/browse.component';
import { BrowseFormComponent } from './browse-form/browse-form.component';
import { PaginationComponent } from './pagination/pagination.component';
import { QuizComponent } from './quiz-main/quiz/quiz.component';
import { ScoreComponent } from './quiz-main/score/score.component';

import { NameFilterPipe } from './name-filter.pipe';
import { Vehicle }  from './vehicle';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, AboutComponent, BrowseFormComponent, ContactComponent, MainComponent, PrivacyComponent, TermsComponent,
        HeaderNarrowComponent, FooterComponent, BrowseComponent, HeaderBannerComponent, TopNavComponent, PaginationComponent,
        NameFilterPipe, QuizComponent, ScoreComponent
      ],
      imports: [ AppRoutingModule, FormsModule, NgbModule.forRoot() ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
