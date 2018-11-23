import { Injectable } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable, throwError } from 'rxjs';
import { Reward } from '../interfaces/reward';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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

  constructor(public data: DataService, private  http: HttpClient) {}


  getRewards() {

    if (this.rewardsList.length <= 0) {

     this.data.getRewards().subscribe(
       data => {
         console.log('** data ' , data);


         for (let i = 0; i < data.length; i++) {

         let reward: Reward = {
           points : data[i].points,
           title : data[i].title,
         };


         this.rewardsList.push(reward);

         console.log('toegevoegd : ' + reward.title );

         }
       }
     );
    }
     return this.rewardsList;
   }
}
