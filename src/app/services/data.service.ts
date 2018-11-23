import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, share, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }



  getRequests(): Observable<any> {
    return this.http.get<any>('https://reward-platform-api.herokuapp.com/challengeRequests?populate=challenge,user').pipe(
      tap( req => console.log('req ', req)),
      map( data => {
        return data.challengeRequests;
      })
      );
  }

  
  getChallenges(): Observable<any> {
    return this.http.get<any>('https://reward-platform-api.herokuapp.com/challenges').pipe(
      tap( req => console.log('req ', req)),
      map( data => {
        return data.challenges;
      })
      );
  }

  getUsers(): Observable<any> {
    return this.http.get<any>('https://reward-platform-api.herokuapp.com/users').pipe(
      tap( req => console.log('req ', req)),
      map( data => {
        return data.users;
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
