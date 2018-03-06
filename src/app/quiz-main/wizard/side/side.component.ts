import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VehicleService } from '../../../vehicle.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  constructor(private router: Router, private location: Location, private vehicleService: VehicleService) { }

  ngOnInit() {
  }

  next() {
    this.router.navigateByUrl('/distance');
  }

  back() {
    this.location.back();
  }
}
