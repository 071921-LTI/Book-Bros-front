import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BookRequest } from '../../models/bookRequest';

@Injectable({
  providedIn: 'root'
})
export class RequestInfoServiceService {

  constructor(private http: HttpClient) { }
  
  
  getAllRequestList(): Observable<BookRequest[]>{
    return this.http.get(environment.apiUrl + 'request').pipe(
      map(response => response as BookRequest[])
    )
  }
}
