import { TestBed, inject } from '@angular/core/testing';

import { EmptyRouteComponent } from './empty-route.component';

describe('a empty-route component', () => {
	let component: EmptyRouteComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				EmptyRouteComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([EmptyRouteComponent], (EmptyRouteComponent) => {
		component = EmptyRouteComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});