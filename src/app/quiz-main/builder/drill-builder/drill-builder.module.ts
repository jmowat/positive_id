import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrillBuilderComponent } from './drill-builder.component';
import { LayoutModule } from '../../../layout/layout.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, LayoutModule, FormsModule
  ],
  declarations: [DrillBuilderComponent],
  exports: [DrillBuilderComponent]
})
export class DrillBuilderModule { }
