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
    return this.http.get<any>('https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=').pipe(
      tap( req => console.log('req ', req)),
      map( data => {
        return data;
      })
      );
  }

}
