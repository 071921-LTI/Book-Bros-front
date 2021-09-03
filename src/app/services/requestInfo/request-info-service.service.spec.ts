import { TestBed } from '@angular/core/testing';

import { RequestInfoServiceService } from './request-info-service.service';

describe('RequestInfoServiceService', () => {
  let service: RequestInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
