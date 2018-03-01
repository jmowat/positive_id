import { TestBed, inject } from '@angular/core/testing';

import { State } from './state';
import { Context } from './context';

describe('State', () => {
	let context:Context;
	beforeEach(() => {
		context = new Context();
	});

 	it('should create', () => {
 		expect(new State()).toBeTruthy();
 	});

 	it('should kick things off with a context', () => {
		expect(context).toBeTruthy();
 	});

 	// Since state requires an active service, most of the testing will be done in StateService
});

