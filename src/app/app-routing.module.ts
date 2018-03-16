import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
// import { PrivacyComponent } from './privacy/privacy.component';
// import { TermsComponent } from './terms/terms.component';
import { BrowseFormComponent } from './browse-form/browse-form.component';
import { QuizComponent } from './quiz-main/quiz/quiz.component';
import { RedoQuizComponent } from './quiz-main/quiz/redo-quiz.component';
import { ScoreComponent } from './quiz-main/score/score.component';

import { QuizBuilderComponent } from './quiz-main/builder/quiz-builder/quiz-builder.component';
import { DrillBuilderComponent } from './quiz-main/builder/drill-builder/drill-builder.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'browse', component: BrowseFormComponent },

  { path: 'quiz', component: QuizComponent },
  { path: 'custom-quiz', component: QuizComponent },
  { path: 'drill', component: QuizComponent },
  { path: 'quiz-builder', component: QuizBuilderComponent },
  { path: 'drill-builder', component: DrillBuilderComponent },
  { path: 'retry', component: RedoQuizComponent },
  { path: 'score', component: ScoreComponent },

  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
