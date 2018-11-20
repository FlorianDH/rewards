import { Injectable } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Reward } from '../interfaces/reward';


@Injectable({
  providedIn: 'root'
})
export class RewardService {


  rewardsList: Reward[] = [];

  constructor(public data: DataService) {}

  getRewards() {

    if (this.rewardsList.length <= 0) {
      
    

     this.data.getRewards().subscribe(
       data => {
         console.log('** data ' , data);


         for (let i = 0; i < data.length; i++) {

         let reward: Reward = {
           points : data[i].points,
           descriptionShort : data[i].descriptionShort,
         };


         this.rewardsList.push(reward);

         console.log('toegevoegd : ' + reward.descriptionShort );

         }

       }
     );
    }
     return this.rewardsList;
   }
}
