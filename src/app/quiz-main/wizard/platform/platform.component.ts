import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VehicleService } from '../../../vehicle.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {

  constructor(private router: Router, private location: Location, private vehicleService: VehicleService) { }

  ngOnInit() {
  }

  next() {
    this.router.navigateByUrl('/era');
  }

  back() {
    this.location.back();
  }

}
