import { TestBed } from '@angular/core/testing';

import { ShopInfoByService } from './shop-info-by.service';

describe('ShopInfoByService', () => {
  let service: ShopInfoByService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopInfoByService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
