import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-narrow',
  templateUrl: './header-narrow.component.html',
  styleUrls: ['./header-narrow.component.css']
})
export class HeaderNarrowComponent implements OnInit {
	@Input() public showBrand: boolean = false;
  	constructor() { }

	ngOnInit() {

	}
}
