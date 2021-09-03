import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BookRequest } from '../../models/bookRequest';
import { Work } from 'src/app/models/work';

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

  rejectRequest(rejected: BookRequest): Observable<string> {
    return this.http.delete<string>(environment.apiUrl  + 'request', { body:rejected }).pipe(
      map(response => response as string)
    )
  }

  approveRequest(approved: Work, requestId: number): Observable<string> {
    return this.http.put<string>(environment.apiUrl  + 'request/' + requestId, approved).pipe(
      map(response => response as string)
    )
  }
}
