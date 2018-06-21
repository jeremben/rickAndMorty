import { TestBed, inject } from '@angular/core/testing';

import { MonServiceService } from './mon-service.service';

describe('MonServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonServiceService]
    });
  });

  it('should be created', inject([MonServiceService], (service: MonServiceService) => {
    expect(service).toBeTruthy();
  }));
});
