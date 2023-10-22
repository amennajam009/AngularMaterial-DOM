import { TestBed } from '@angular/core/testing';

import { AngularBootstrapCommunationService } from './angular-bootstrap-communation.service';

describe('AngularBootstrapCommunationService', () => {
  let service: AngularBootstrapCommunationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularBootstrapCommunationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
