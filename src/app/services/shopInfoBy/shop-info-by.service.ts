import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Book } from '../../models/book';

@Injectable({
  providedIn: 'root'
})
export class ShopInfoByService {

  constructor(private http: HttpClient) { }

  getBooksByAuthorOrTitle(authorOrTitle:string): Observable<Book[]>{
    return this.http.get(environment.apiUrl + 'books/' + authorOrTitle, { headers: { "Authorization": `${sessionStorage.getItem('token')}` }}).pipe(
      map(response => response as Book[])
    )
  }
}
