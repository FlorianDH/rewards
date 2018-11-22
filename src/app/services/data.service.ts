import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, share, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }



  
  getChallenges(): Observable<any> {
    return this.http.get<any>('https://reward-platform-api.herokuapp.com/challenges').pipe(
      tap( req => console.log('req ', req)),
      map( data => {
        return data.challenges;
      })
      );
  }



  getRewards(): Observable<any> {
    return this.http.get<any>('https://reward-platform-api.herokuapp.com/rewards').pipe(
      tap( req => console.log('req ', req)),
      map( data => {
        return data.rewards;
      })
    );

  }

}
