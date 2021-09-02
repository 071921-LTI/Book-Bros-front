import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Wishlist } from 'src/app/models/wishlist';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetWishlistService {

  constructor(private http: HttpClient ) { }

  getWishlist(): Observable<Wishlist[]> {
    return this.http.get(environment.apiUrl + 'wishlist', { headers: { 'Authorization': `${sessionStorage.getItem('token')}` }}).pipe(
      map(response => response as Wishlist[])
    )
  }
}
