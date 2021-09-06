import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchResult } from '../../models/searchResult';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {

  constructor(private http: HttpClient) { }

  searchByAuthor(authorName: string): Observable<SearchResult> {
    return this.http.get(`${environment.apiUrl}api/authors/${authorName}`).pipe(
      map(response => response as SearchResult)
    )
  }

  searchByTitle(title: string): Observable<SearchResult> {
    return this.http.get(`${environment.apiUrl}api/title/${title}`).pipe(
      map(response => response as SearchResult)
    )
  }

  searchByAuthorAndTitle(authorName: string, title: string): Observable<SearchResult> {
    return this.http.get(`${environment.apiUrl}api?title=${title}&author=${authorName}`).pipe(
      map(response => response as SearchResult)
    )
  }

}
