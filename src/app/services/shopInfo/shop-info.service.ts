import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Books } from '../../models/books';

@Injectable({
  providedIn: 'root'
})
export class ShopInfoService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Books>{
    return this.http.get(environment.apiUrl + '/books').pipe(
      map(response => response as Books)
    )
  }
}
