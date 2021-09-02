import { TestBed } from '@angular/core/testing';

import { PurchaseBookService } from './purchase-book.service';

describe('PurchaseBookService', () => {
  let service: PurchaseBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
