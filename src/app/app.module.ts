import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';

import { BrowseComponent } from './browse/browse.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ModalComponent } from './modal/modal.component';
import { BrowseFormComponent } from './browse-form/browse-form.component';
import { QuizComponent } from './quiz-main/quiz/quiz.component';
import { RedoQuizComponent } from './quiz-main/quiz/redo-quiz.component';

import { QuizService } from './quiz-main/quiz/quiz.service';
import { GameStateService } from './quiz-main/state/game-state.service';
import { VehicleService } from './vehicle.service';
import { NameFilterPipe } from './name-filter.pipe';

import { ScoreComponent } from './quiz-main/score/score.component';
import { FocusDirective } from './quiz-main/quiz/focus.directive';
import { CustomMinDirective } from './custom-min-validator.directive';
import { CustomMaxDirective } from './custom-max-validator.directive';
import { CustomEmailValidatorDirective } from './custom-email-validator.directive';
import { GameParmsService } from './quiz-main/game/game-parms.service';

import { QuizBuilderComponent } from './quiz-main/builder/quiz-builder/quiz-builder.component';
import { DrillBuilderComponent } from './quiz-main/builder/drill-builder/drill-builder.component';

import { LayoutModule } from './layout/layout.module';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import * as myGlobals from './globals';

@NgModule({
  declarations: [
    AppComponent,

    MainComponent,

    BrowseComponent,
    PaginationComponent,
    ModalComponent,
    BrowseFormComponent,
    NameFilterPipe,
    QuizComponent,
    RedoQuizComponent,
    ScoreComponent,
    FocusDirective,
    CustomMinDirective,
    CustomMaxDirective,
    CustomEmailValidatorDirective,
    QuizBuilderComponent,
    DrillBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    HttpClientModule,
    LayoutModule,
    MultiselectDropdownModule,
    AppRoutingModule  // keep at the end!
  ],
  exports: [PaginationComponent],
  providers: [
    VehicleService,
    QuizService,
    GameStateService,
    GameParmsService,
    {
      provide: RECAPTCHA_SETTINGS,
      // www.digitalpraxis.com: 6Lf0pzoUAAAAAGDqvSIkYwb31CaAmSxXHDE6R0-M
      // 127.0.0.1: 6LcAL00UAAAAAIODAAHMYC7wvPOMkILX2eAahDvG
      useValue: { siteKey: myGlobals.localhostSiteKey } as RecaptchaSettings,
    }
  ],
  entryComponents: [
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
