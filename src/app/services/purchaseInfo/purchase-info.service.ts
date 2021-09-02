import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Purchase } from '../../models/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseInfoService {

  constructor(private http: HttpClient) { }

  getPurchaseList(id:string): Observable<Purchase[]>{
    return this.http.get(environment.apiUrl + 'purchases/' + id).pipe(
      map(response => response as Purchase[])
    )
  }

  getAllPurchasesList(): Observable<Purchase[]> {
    return this.http.get(environment.apiUrl + 'purchases').pipe(
      map(response => response as Purchase[])
    )
  }
}
