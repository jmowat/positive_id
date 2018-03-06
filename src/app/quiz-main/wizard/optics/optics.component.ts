import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VehicleService } from '../../../vehicle.service';

@Component({
  selector: 'app-optics',
  templateUrl: './optics.component.html',
  styleUrls: ['./optics.component.css']
})
export class OpticsComponent implements OnInit {

  constructor(private router: Router, private location: Location, private vehicleService: VehicleService) { }

  ngOnInit() {
  }

  next() {
    this.router.navigateByUrl('/perspectives');
  }

  back() {
    this.location.back();
  }
}
