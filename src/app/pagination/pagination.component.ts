import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers: [NgbPaginationConfig]
})
export class PaginationComponent implements OnInit {
  @Input()
  collectionSize: number;
  @Input()
  page: number;
  previousPage: number;
  @Output()
  pageChanged = new EventEmitter<number>();

  constructor(config: NgbPaginationConfig) {
    // customize default values of paginations used by this component tree
    config.pageSize = 6;
    // this.page = 1;
  }

  ngOnInit() {

  }

  onChange(page: number) {
    this.pageChanged.emit(page);
  }
}
