import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VehicleService } from '../../../vehicle.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private router: Router, private location: Location, private vehicleService: VehicleService) { }

  ngOnInit() {
  }

  next() {
    this.router.navigateByUrl('/quiz');
  }

  back() {
    this.location.back();
  }
}
