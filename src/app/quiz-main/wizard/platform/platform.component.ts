import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VehicleService } from '../../../vehicle.service';
import { WizardService } from '../wizard.service';
import { Vehicle } from '../../../vehicle';
import { GrammarHelper } from '../../grammar-helper';
import { QuizParmDisplayComponent } from '../quiz-parm-display/quiz-parm-display.component';
import { QuizParms } from '../../quiz-parms';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
  vehicles: Vehicle[];
  platforms = {
    availableOptions: [{
      id: 'ground vehicle',
      name: 'Ground Vehicles'
    }, {
      id: 'aircraft',
      name: 'Aircraft'
    }],
    selectedOption: {
      id: 'ground vehicle',
      name: 'Ground Vehicles'
    } // This sets the default value of the select in the ui
  };

  constructor(private router: Router, private location: Location, private vehicleService: VehicleService,
    private wizardService: WizardService) { }

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe((data) => {
      this.vehicles = data;
      // add this so the original history can be preserved
      this.wizardService.setData(this.vehicles);
    });
  }

  next() {
    this.wizardService.platform = this.platforms.selectedOption.id;
    this.wizardService.setData(this.platforms.selectedOption.id ? WizardService
      .filter(this.vehicles, 'type', this.platforms.selectedOption.id) : this.vehicles);
    this.router.navigateByUrl('/era');
  }

}
