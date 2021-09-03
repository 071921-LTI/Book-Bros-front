import { TestBed } from '@angular/core/testing';

import { GetWishlistService } from './get-wishlist.service';

describe('GetWishlistService', () => {
  let service: GetWishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetWishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
