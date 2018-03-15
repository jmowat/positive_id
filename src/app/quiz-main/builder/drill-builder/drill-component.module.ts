import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../../layout/layout.module';
import { FormsModule } from '@angular/forms';
import { VehicleSelectionComponent } from '../controls/vehicle-selection/vehicle-selection.component';

@NgModule({
  imports: [
    CommonModule, LayoutModule, FormsModule
  ],
  declarations: [VehicleSelectionComponent],
  exports: [VehicleSelectionComponent]
})
export class DrillComponentModule { }
