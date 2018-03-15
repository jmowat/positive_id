import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DistanceComponent } from '../controls/distance/distance.component';
import { EraComponent } from '../controls/era/era.component';
import { OpticsComponent } from '../controls/optics/optics.component';
import { PerspectivesComponent } from '../controls/perspectives/perspectives.component';
import { PlatformComponent } from '../controls/platform/platform.component';
import { SideComponent } from '../controls/side/side.component';
import { MaxQuestionsComponent } from '../controls/max-questions/max-questions.component';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, LayoutModule
  ],
  declarations: [DistanceComponent, EraComponent, OpticsComponent, PerspectivesComponent,
    PlatformComponent, SideComponent, MaxQuestionsComponent],
  exports: [DistanceComponent, EraComponent, OpticsComponent, PerspectivesComponent,
    PlatformComponent, SideComponent, MaxQuestionsComponent]
})
export class QuizComponentModule { }
