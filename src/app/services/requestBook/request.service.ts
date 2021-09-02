import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  request(custId: string, title: string, author: string): Observable<String> {
    //return this.http.post(environment.apiUrl + 'request', {title, author}, { responseType: 'text' }) //headers: { 'Authorization': `${sessionStorage.getItem('token')}`
    return this.http.post(environment.apiUrl + 'request', { custId, title, author}, { responseType: 'text' })
  
  }
}
