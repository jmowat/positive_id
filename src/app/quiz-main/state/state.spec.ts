import { TestBed, inject } from '@angular/core/testing';

import { State } from './state';
import { Context } from './context';
import { Router } from '@angular/router';

describe('State', () => {
	let context:Context;


	const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

 	beforeEach(() => {
	    TestBed.configureTestingModule({
	      imports: [  ],
	      providers: [
	      {
	      	provide: Router,
	      	useValue: routerSpy
	      }]
	    });
	});


	beforeEach(() => {
		context = new Context();
	});

 	it('should create', inject([Router], (router: Router) => {
 		expect(new State()).toBeTruthy();
 	}));

 	it('should kick things off with a context', () => {
		expect(context).toBeTruthy();
 	});

 	// Since state requires an active service, most of the testing will be done in StateService
});

