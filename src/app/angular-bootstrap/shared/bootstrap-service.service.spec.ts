import { TestBed } from '@angular/core/testing';

import { BootstrapServiceService } from './bootstrap-service.service';

describe('BootstrapServiceService', () => {
  let service: BootstrapServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BootstrapServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
