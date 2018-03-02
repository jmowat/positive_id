import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } 		from './main/main.component';
import { AboutComponent } 		from './about/about.component';
import { ContactComponent } 		from './contact/contact.component';
import { PrivacyComponent } 		from './privacy/privacy.component';
import { TermsComponent } 		from './terms/terms.component';
import { BrowseFormComponent } 		from './browse-form/browse-form.component';
import { QuizComponent }     from './quiz-main/quiz/quiz.component';
import { ScoreComponent }     from './quiz-main/score/score.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'browse', component: BrowseFormComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'main', component: MainComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'drill', component: QuizComponent },
  { path: 'score', component: ScoreComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main'}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule {}