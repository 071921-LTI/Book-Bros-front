import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewWishlist } from 'src/app/models/newWishlist';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddToWishlistService {

  constructor(private http: HttpClient) { }

  addToWishlist(wish: NewWishlist) {
    return this.http.post(environment.apiUrl + 'wishlist', wish, { responseType: 'text', headers: { 'Authorization': `${sessionStorage.getItem('token')}`}})
  }
}
