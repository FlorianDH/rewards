import { Injectable } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable, throwError } from 'rxjs';
import { Reward } from '../interfaces/reward';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Claim } from '../interfaces/claim';
import {Challenge} from '../interfaces/challenge';

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  rewardsList: Reward[] = [];
  claimList: Claim[] = [];

  user = JSON.parse(localStorage.getItem('user'));

  constructor(public data: DataService, private  http: HttpClient) {}

  addRewardClaim (claim: Claim): Observable<Claim> {
    let token = localStorage.getItem('token').split('"')
    let headers : HttpHeaders = new HttpHeaders({
      'Authorization': 'bearer ' + token[1]
    })
    return this.http.post<Claim>('https://reward-platform-api.herokuapp.com/rewardClaims/', claim, {headers}).pipe(
      tap((claim: Claim) => this.log(`added rewardClaim`)),
      catchError(err => throwError(err))
    );
  }

  addReward (title: string, points: string): Observable<Reward> {
    const token = localStorage.getItem('token').split('"');
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'bearer ' + token[1]
    });
    return this.http.post<Reward>('https://reward-platform-api.herokuapp.com/rewards',
      {'title': title, 'points': points}, {headers}).pipe(
      tap((reward: Reward) => this.log(`added reward w/ id=${reward.title}`)),
      catchError(err => throwError(err))
    );
  }

  private log(message: String) {

  }

  getRewards() {
    if (this.rewardsList.length <= 0) {

     this.data.getRewards().subscribe(
       data => {for (let i = 0; i < data.length; i++) {
           const reward: Reward = {
             id : data[i]._id,
             points : data[i].points,
             title : data[i].title,
           };
           this.rewardsList.push(reward);
         }
       }
     );
    }
     return this.rewardsList;
   }

  getClaims() {
    if (this.claimList.length <= 0) {

      this.data.getClaims().subscribe(
        data => {for (let i = 0; i < data.length; i++) {
            const claim: Claim = {
              _id : data[i]._id,
              reward_id : data[i].reward,
              date : data[i].date,
              received : data[i].received,
              user_id : data[i].user,
            };
            this.claimList.push(claim);
          }
        }
      );
    }
    return this.claimList;
  }
}
