import { TestBed, inject } from '@angular/core/testing';

import { TestParmsService } from './test-parms.service';

describe('TestParmsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestParmsService]
    });
  });

  it('should be created', inject([TestParmsService], (service: TestParmsService) => {
    expect(service).toBeTruthy();
  }));
});
