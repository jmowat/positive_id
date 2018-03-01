import { TestBed, inject } from '@angular/core/testing';

import { State } from './state';
import { Context } from './context';

describe('State', () => {
	let context:Context;
	beforeEach(() => {
		let quizParms;// = $stateParams.quizParms;
		// $state.current.name is some AngularJS name from the router, I think
		let stateName;// = $state.current.name;
		let quizStateDetails:any = {
			stateName: stateName,
			stateParams: quizParms
		};
		context = new Context(quizStateDetails);
	});

 	it('should create', () => {
 		expect(new State()).toBeTruthy();
 	});

 	it('should kick things off with a context', () => {
		expect(context).toBeTruthy();
 	});

 	// Since state requires an active service, most of the testing will be done in StateService
});

