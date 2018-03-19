import { Component, OnInit, OnChanges, Input, Pipe, PipeTransform } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vehicle } from '../vehicle';

import { PaginationComponent } from '../pagination/pagination.component';
import { BrowseFormComponent } from '../browse-form/browse-form.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit, OnChanges {
  @Input()
  vehicles: Vehicle[];

  @Input()
  nameFilter: string;

  errorMessage: string;
  page = 1;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.page = 1;
  }

  popUp(vehicle: Vehicle) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.vehicle = vehicle;
    modalRef.result.then((result) => {
    }).catch((result) => {
    });
  }

  dataChange(event) {
    console.log('Trigger data change');
  }
}
