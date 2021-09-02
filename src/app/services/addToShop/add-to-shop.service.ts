import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Work } from 'src/app/models/work';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddToShopService {

  constructor(private http: HttpClient) { }

  addBook(work: Work): Observable<string> {
    return this.http.post(environment.apiUrl + 'books', work, { responseType: 'text' })
  }
}
