import { Injectable } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable, throwError } from 'rxjs';
import { Reward } from '../interfaces/reward';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Claim } from '../interfaces/claim';
import { UserService } from './user.service';


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
  claimHistoryList: Claim[] = [];

  user = JSON.parse(localStorage.getItem('user'));
  token = localStorage.getItem('token').split('"');
  punten;
  constructor(private userService: UserService, public data: DataService, private  http: HttpClient) {
    this.getPunten();
  }

  addRewardClaim (claim: Claim): Observable<Claim> {
    let headers : HttpHeaders = new HttpHeaders({
      "Authorization":"bearer "+this.token[1]
    })
    return this.http.post<Claim>('https://reward-platform-api.herokuapp.com/rewardClaims/', claim, {headers}).pipe(
      tap((claim: Claim) => this.log(`added rewardClaim`)),
      catchError(err => throwError(err))
    );
  }

  addReward (title: string, points: string): Observable<Reward> {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'bearer ' + this.token[1]
    });
    return this.http.post<Reward>('https://reward-platform-api.herokuapp.com/rewards',
      {'title': title, 'points': points}, {headers}).pipe(
      tap((reward: Reward) => this.log(`added reward w/ id=${reward.title}`)),
      catchError(err => throwError(err))
    );
  }

  deleteReward(id: any){
    let token = localStorage.getItem("token").split('"')
    let headers : HttpHeaders = new HttpHeaders({
      "Authorization":"bearer "+token[1]
    })
    let index = this.rewardsList.indexOf(this.rewardsList.find(reward => reward._id === id));
    this.rewardsList.splice(index, 1);
   return this.http.delete<any>('https://reward-platform-api.herokuapp.com/rewards/' + id, {headers}).subscribe();
  }

  EditReward(id: any, title: string ,points: string) {
    let token = localStorage.getItem("token").split('"')
    let headers : HttpHeaders = new HttpHeaders({
      "Authorization":"bearer "+token[1]
    })
    let index = this.rewardsList.indexOf(this.rewardsList.find(reward => reward._id === id));
    this.rewardsList.splice(index, 1);
   return this.http.patch<any>('https://reward-platform-api.herokuapp.com/rewards/' + id,
   [{"propName": "title" , "value": title},
    {"propName":"points", "value": points}],
    {headers}).subscribe();

  }

  private log(message: String) {

  }
  private getPunten(){
    this.punten =  JSON.parse(localStorage.getItem("user")).currentPoints;
  }
  getRewards() {
    if (this.rewardsList.length <= 0) {

     this.data.getRewards().subscribe(
       data => {for (let i = 0; i < data.length; i++) {
           const reward: Reward = {
             _id : data[i]._id,
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
        data => {
          for (let i = 0; i < data.length; i++) {
            if (data[i].received === false) {
              const claim: Claim = {
                _id: data[i]._id,
                reward_id: data[i].reward,
                date: data[i].date,
                received: data[i].received,
                user_id: data[i].user,
              };
              this.claimList.push(claim);
            }
          }
        }
      );
    }
    return this.claimList;
  }
  getClaimsHistory() {
    if (this.claimHistoryList.length <= 0) {

      this.data.getClaims().subscribe(
        data => {
          for (let i = 0; i < 20; i++) {
            if (data[i].received === true) {

              const claim: Claim = {
                _id: data[i]._id,
                reward_id: data[i].reward,
                date: data[i].date,
                received: data[i].received,
                user_id: data[i].user,
              };
              this.claimHistoryList.push(claim);
            }
          }
        }
      );
    }
    return this.claimHistoryList;
  }
  receivedReward (id: any, i: any) {
    let token = localStorage.getItem('token').split('"')
    let headers : HttpHeaders = new HttpHeaders({
      'Authorization': 'bearer '+token[1]
    });

    this.claimList[i].received = true;

    let user = this.claimList[i].user_id;
    let reward = this.claimList[i].reward_id;

    this.userService.updateUser(user._id, user.currentPoints, user.totalPoints);

    return this.http.patch("https://reward-platform-api.herokuapp.com/rewardClaims/" + id, [{
      "propName": "received", "value" : "true"
    }],  {headers} ).subscribe(
      data => {
        console.log("PUT Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      }
    );

  }
}
