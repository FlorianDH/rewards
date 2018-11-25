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
    return this.http.get<any>('https://reward-platform-api.herokuapp.com/challenges?sort=+points').pipe(
      tap(),
      map( data => {
        return data.challenges;
      })
      );
  }

  getUsers(): Observable<any> {
    return this.http.get<any>('https://reward-platform-api.herokuapp.com/users').pipe(
      tap(),
      map( data => {
        return data.users;
      })
    );
  }

  getRewards(): Observable<any> {
    return this.http.get<any>('https://reward-platform-api.herokuapp.com/rewards?sort=+points').pipe(
      tap( req => console.log('req ', req)),
      map( data => {
        return data.rewards;
      })
    );
  }

  getClaims(): Observable<any> {
    return this.http.get<any>('https://reward-platform-api.herokuapp.com/rewardclaims?populate=reward,user').pipe(
      tap(),
      map( data => {
        return data.rewardClaims;
      })
    );
  }

  getRequests(): Observable<any> {
    return this.http.get<any>('https://reward-platform-api.herokuapp.com/challengerequests?populate=challenge,user').pipe(
      tap(),
      map( data => {
        return data.challengeRequests;
      })
    );
  }
}
