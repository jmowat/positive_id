import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';
import { FilterHelper } from '../filter-helper';
import { GrammarHelper } from '../quiz-main/grammar-helper';

@Component({
  selector: 'app-browse-form',
  templateUrl: './browse-form.component.html',
  styleUrls: ['./browse-form.component.css']
})
export class BrowseFormComponent implements OnInit {
  vehicles: Vehicle[];
  platformVehicles: Vehicle[];

  nameFilter: string;
  errorMessage: string;

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

  // Populated with data from vehicles list
  sides = {
    availableOptions: [],
    selectedOption: { id: '' }
  };

  eras = {
    availableOptions: [],
    selectedOption: { id: '' }
  };

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.onChange();
  }

  reset() {
    this.nameFilter = '';
    this.sides.selectedOption.id = '';
    this.eras.selectedOption.id = '';
    this.platforms.selectedOption.id = 'ground vehicle';
    this.onChange();
  }

  onChange() {
    this.vehicleService.getVehicles()
      .subscribe(x => {
        this.vehicles = x.filter((v) => v.type === this.platforms.selectedOption.id);
      this.vehicles.sort(function(a: Vehicle, b: Vehicle) {
          return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
      });
      this.platformVehicles = this.vehicles;

      // populate sides
      this.sides.availableOptions = [];
      const validSides = FilterHelper.getSides(this.platformVehicles);
      for (const side of validSides) {
        this.sides.availableOptions.push({ id: side, name: GrammarHelper.toTitleCase(side) });
      }
      this.sides.availableOptions.sort(function(a, b) {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
      });
      this.sides.availableOptions.unshift({ id: '', name: 'Any' });

      // populate eras
      this.eras.availableOptions = [];
      const validEras = FilterHelper.getEras(this.platformVehicles);
      for (const era of validEras) {
        this.eras.availableOptions.push({ id: era, name: GrammarHelper.toTitleCase(era) });
      }
      this.eras.availableOptions.sort(function(a, b) {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
      });

      this.eras.availableOptions.unshift({ id: '', name: 'Any' });

      if (!this.sides.availableOptions.map(s => s.id).includes(this.sides.selectedOption.id)) {
        this.sides.selectedOption.id = '';
      }
      if (!this.eras.availableOptions.map(s => s.id).includes(this.eras.selectedOption.id)) {
        this.eras.selectedOption.id = '';
      }
      // on platform changes, the old selections should be checked to see if they are
      // valid before trying to filter on them. You can end up with empty results this way.
      if (this.sides.selectedOption.id) {
        this.vehicles = this.vehicles.filter((v) => v.side.includes(this.sides.selectedOption.id));
      }
      if (this.eras.selectedOption.id) {
        this.vehicles = this.vehicles.filter((v) => v.era.includes(this.eras.selectedOption.id));
      }
    },
    error => this.errorMessage = <any>error);
  }
}
