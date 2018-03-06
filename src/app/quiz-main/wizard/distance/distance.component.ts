import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VehicleService } from '../../../vehicle.service';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent implements OnInit {

  constructor(private router: Router, private location: Location, private vehicleService: VehicleService) { }

  ngOnInit() {
  }

  next() {
    this.router.navigateByUrl('/optics');
  }

  back() {
    this.location.back();
  }
}
