import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { BrowseFormComponent } from './browse-form/browse-form.component';
import { QuizComponent } from './quiz-main/quiz/quiz.component';
import { RedoQuizComponent } from './quiz-main/quiz/redo-quiz.component';
import { ScoreComponent } from './quiz-main/score/score.component';

import { PlatformComponent } from './quiz-main/wizard/platform/platform.component';
import { EraComponent } from './quiz-main/wizard/era/era.component';
import { SideComponent } from './quiz-main/wizard/side/side.component';
import { DistanceComponent } from './quiz-main/wizard/distance/distance.component';
import { OpticsComponent } from './quiz-main/wizard/optics/optics.component';
import { PerspectivesComponent } from './quiz-main/wizard/perspectives/perspectives.component';
import { VehicleSelectionComponent } from './quiz-main/wizard/vehicle-selection/vehicle-selection.component';
import { SummaryComponent } from './quiz-main/wizard/summary/summary.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'browse', component: BrowseFormComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'main', component: MainComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },

  { path: 'quiz', component: QuizComponent },
  { path: 'custom-quiz', component: QuizComponent },
  { path: 'drill', component: QuizComponent },
  { path: 'quiz-builder', component: PlatformComponent },
  { path: 'drill-builder', component: PlatformComponent },
  { path: 'retry', component: RedoQuizComponent },
  { path: 'score', component: ScoreComponent },

  { path: 'platform', component: PlatformComponent },
  { path: 'era', component: EraComponent },
  { path: 'side', component: SideComponent },
  { path: 'distance', component: DistanceComponent },
  { path: 'optics', component: OpticsComponent },
  { path: 'perspectives', component: PerspectivesComponent },
  { path: 'vehicle-selection', component: VehicleSelectionComponent },
  { path: 'summary', component: SummaryComponent },

  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
