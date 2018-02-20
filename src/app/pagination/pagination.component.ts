import { Component, OnInit, Input } from '@angular/core';

import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers: [NgbPaginationConfig] // add NgbPaginationConfig to the component providers
})
export class PaginationComponent implements OnInit {
	@Input() collectionSize: number;
	@Input() page: number;

  	constructor(config: NgbPaginationConfig) {
		// customize default values of paginations used by this component tree
    	config.pageSize = 6;
  	}

	ngOnInit() {

	}

    getNumberOfItems() : number {
  		return this.collectionSize;
    }

}
