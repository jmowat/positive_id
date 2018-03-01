import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';

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
import { PaginationComponent } from './pagination/pagination.component';
import { ModalComponent } from './modal/modal.component';
import { BrowseFormComponent } from './browse-form/browse-form.component';
import { QuizComponent } from './quiz-main/quiz/quiz.component';

import { QuizService }  from './quiz-main/quiz.service';
import { StateService }  from './quiz-main/state/state.service';
import { VehicleService }  from './vehicle.service';
import { NameFilterPipe } from './name-filter.pipe';

import { DEFAULT_GROUND_QUIZ, TEST_PARMS } from './quiz-main/test-parms';
import { ScoreComponent } from './quiz-main/score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MainComponent,
    HeaderBannerComponent,
    FooterComponent,
    ContactComponent,
    TopNavComponent,
    HeaderNarrowComponent,
    TermsComponent,
    PrivacyComponent,
    BrowseComponent,
    PaginationComponent,
    ModalComponent,
    BrowseFormComponent,
    NameFilterPipe,
    QuizComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [ PaginationComponent ],
  providers: [
    VehicleService,
    QuizService,
    StateService,
    {
      provide: TEST_PARMS, useValue: DEFAULT_GROUND_QUIZ
    }
  ],
  entryComponents: [
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
