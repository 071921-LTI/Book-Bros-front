import { TestBed } from '@angular/core/testing';

import { AddToShopService } from './add-to-shop.service';

describe('AddToShopService', () => {
  let service: AddToShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddToShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
