import { Component, OnInit } from '@angular/core';
import { GameBuilderStateService } from '../state/game-builder-state.service';

@Component({
  selector: 'app-vehicle-selection',
  templateUrl: './vehicle-selection.component.html',
  styleUrls: ['./vehicle-selection.component.css']
})
export class VehicleSelectionComponent implements OnInit {

  constructor(private stateService: GameBuilderStateService) { }

  ngOnInit() {
  }

}
