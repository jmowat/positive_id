import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizBuilderComponent } from './quiz-builder.component';
import { LayoutModule } from '../../../layout/layout.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, LayoutModule, FormsModule
  ],
  declarations: [QuizBuilderComponent],
  exports: [QuizBuilderComponent]
})
export class QuizBuilderModule { }
