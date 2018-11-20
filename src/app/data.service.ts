import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, share, tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getChallenges(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/challenges').pipe(
      tap( req => console.log('req ', req)),
      map( data => {
        return data;
      })
      );
  }

}
