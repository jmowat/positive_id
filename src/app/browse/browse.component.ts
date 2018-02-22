import { Component, OnInit } from '@angular/core';
import { VehicleService }  from '../vehicle.service';
import { Vehicle }  from '../vehicle';
import { PaginationComponent } from '../pagination/pagination.component';
import { BrowseFormComponent } from '../browse-form/browse-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
	vehicles: Vehicle[];
	errorMessage: string;
	page = 1;

   	constructor(private vehicleService: VehicleService, private modalService: NgbModal) {
   	}

	ngOnInit() {
		this.vehicleService.getVehicles()
            .subscribe(vehicles => this.vehicles = vehicles,
                       error => this.errorMessage = <any>error);
        this.vehicleService.vehiclesUpdated
            .subscribe(vehicles => {
            	this.vehicles = vehicles;
            	this.page = 1;
            },
                       error => this.errorMessage = <any>error);
	}

	getNumberOfItems() : number {
		if(this.vehicles) {
			return this.vehicles.length;
		} else {
			return 0;
		}
	}

	popUp(vehicle: Vehicle) {
		const modalRef = this.modalService.open(ModalComponent);
		modalRef.componentInstance.vehicle = vehicle;
		modalRef.result.then((result) => {
			// console.log(result);
			// console.log('closed');
		}).catch( (result) => {
			// console.log(result);
			// console.log('cancelling');
		});

	}


}
