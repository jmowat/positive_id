import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } 		from './main/main.component';
import { AboutComponent } 		from './about/about.component';
import { ContactComponent } 		from './contact/contact.component';
import { PrivacyComponent } 		from './privacy/privacy.component';
import { TermsComponent } 		from './terms/terms.component';
import { BrowseFormComponent } 		from './browse-form/browse-form.component';
import { QuizComponent }     from './quiz-main/quiz/quiz.component';
import { RedoQuizComponent }     from './quiz-main/quiz/redo-quiz.component';
import { ScoreComponent }     from './quiz-main/score/score.component';
import { QuizBuilderComponent }     from './quiz-main/builder/quiz-builder/quiz-builder.component';
import { DEFAULT_GROUND_QUIZ,
         THERMALS_GROUND_QUIZ,
         FAR_GROUND_QUIZ,
         EASTERN_GROUND_QUIZ,
         WESTERN_GROUND_QUIZ,
         REAR_GROUND_QUIZ,
         WW2_AIRCRAFT_QUIZ,
         WESTERN_AIRCRAFT_QUIZ,
         EASTERN_AIRCRAFT_QUIZ,
         FAR_MODERN_AIRCRAFT_QUIZ,
         WW2_AIRCRAFT_DRILL,
         WW2_SOVIET_AIRCRAFT_DRILL } from './quiz-main/test-parms';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'browse', component: BrowseFormComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'main', component: MainComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'quiz', component: QuizComponent,  data: DEFAULT_GROUND_QUIZ},
  { path: 'drill', component: QuizComponent, data: WW2_SOVIET_AIRCRAFT_DRILL},
  { path: 'quiz-builder', component: QuizBuilderComponent,
  { path: 'drill-builder', component: QuizBuilderComponent,
  { path: 'retry', component: RedoQuizComponent},

  { path: 'q-thermals-ground', component: QuizComponent, data: THERMALS_GROUND_QUIZ},
  { path: 'q-far-ground', component: QuizComponent, data: FAR_GROUND_QUIZ},
  { path: 'q-eastern-ground', component: QuizComponent, data: EASTERN_GROUND_QUIZ},
  { path: 'q-western-ground', component: QuizComponent, data: WESTERN_GROUND_QUIZ},
  { path: 'q-rear-ground', component: QuizComponent, data: REAR_GROUND_QUIZ},
  { path: 'q-ww2-air', component: QuizComponent, data: WW2_AIRCRAFT_QUIZ},
  { path: 'q-western-air', component: QuizComponent, data: WESTERN_AIRCRAFT_QUIZ},
  { path: 'q-eastern-air', component: QuizComponent, data: EASTERN_AIRCRAFT_QUIZ},
  { path: 'q-far-modern-air', component: QuizComponent, data: FAR_MODERN_AIRCRAFT_QUIZ},
  { path: 'd-ww2-air', component: QuizComponent, data: WW2_AIRCRAFT_DRILL},
  { path: 'd-ww2-soviet-air', component: QuizComponent, data: WW2_SOVIET_AIRCRAFT_DRILL},

  { path: 'score', component: ScoreComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main'}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule {}