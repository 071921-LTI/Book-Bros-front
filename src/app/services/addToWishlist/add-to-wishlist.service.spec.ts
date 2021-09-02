import { TestBed } from '@angular/core/testing';

import { AddToWishlistService } from './add-to-wishlist.service';

describe('AddToWishlistService', () => {
  let service: AddToWishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddToWishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
