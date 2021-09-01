import { TestBed } from '@angular/core/testing';

import { PurchaseInfoService } from './purchase-info.service';

describe('PurchaseInfoService', () => {
  let service: PurchaseInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
