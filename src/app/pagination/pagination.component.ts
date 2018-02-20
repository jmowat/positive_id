import { Component, OnInit, EventEmitter  } from '@angular/core';

import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers: [NgbPaginationConfig], // add NgbPaginationConfig to the component providers
  inputs: ['collectionSize', 'page'],
  outputs: ['pageChanged']
})
export class PaginationComponent implements OnInit {
	collectionSize: number;
	page: number;
	previousPage: number;
	pageChanged = new EventEmitter<number>();

  	constructor(config: NgbPaginationConfig) {
		// customize default values of paginations used by this component tree
    	config.pageSize = 6;
    	//this.page = 1;
  	}

	ngOnInit() {

	}

	onChange(page: number) {
		this.pageChanged.emit(page);
  	}

}
