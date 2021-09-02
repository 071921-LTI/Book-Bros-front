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

  request(title: string, author: string): Observable<string> {
    return this.http.post(environment.apiUrl + 'request', {title, author}, { responseType: 'text' })
  }
}
