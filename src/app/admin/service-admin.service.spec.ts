import { TestBed, inject } from '@angular/core/testing';

import { ServiceAdminService } from './service-admin.service';

describe('ServiceAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceAdminService]
    });
  });

  it('should be created', inject([ServiceAdminService], (service: ServiceAdminService) => {
    expect(service).toBeTruthy();
  }));
});
