import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(username: string, password: string): Observable<string> {
    return this.http.post(environment.apiUrl + 'users', { username, password, role: 'Customer' }, { responseType: 'text' })
  }
}
