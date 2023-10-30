import { TestBed } from '@angular/core/testing';

import { AngularMaterialCommunicationService } from './angular-material-communication.service';

describe('AngularMaterialCommunicationService', () => {
  let service: AngularMaterialCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularMaterialCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
