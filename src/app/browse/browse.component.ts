import { Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vehicle }  from '../vehicle';

import { PaginationComponent } from '../pagination/pagination.component';
import { BrowseFormComponent } from '../browse-form/browse-form.component';
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

   	constructor(private modalService: NgbModal) {
   	}

	ngOnInit() {

	}

	popUp(vehicle: Vehicle) {
		const modalRef = this.modalService.open(ModalComponent);
		modalRef.componentInstance.vehicle = vehicle;
		modalRef.result.then((result) => {
		}).catch( (result) => {
		});
	}
}
