import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Purchase } from '../../models/purchase';
import { Book } from '../../models/book';

@Injectable({
  providedIn: 'root'
})
export class PurchaseBookService {

  constructor(private http: HttpClient) { }

  authToken: string = '';

  addPurchase(book:Book): Observable<Object>{
    this.authToken = sessionStorage.getItem('token')!;

    let headers = new HttpHeaders();
    headers = headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    headers.append("Access-Control-Allow-Authorization", "true");
    headers.append('Access-Control-Allow-Headers',"Authorization");
    headers.append("Access-Control-Expose-Headers", "Authorization");
    

    console.log(this.authToken)
    console.log(book)

    return this.http.post(environment.apiUrl + 'purchases', book, { 'headers': headers })
    .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
