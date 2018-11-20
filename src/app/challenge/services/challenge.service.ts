import { Injectable } from '@angular/core';
import { DataService } from 'src/app/data.service';
import {Challenge} from '../../interfaces/Challenge';


@Injectable({
  providedIn: 'root'
})
export class ChallengeService {


  challengesList : Challenge[] = [];
  
  constructor(public data : DataService) {} 


   getChallenges(){
     this.data.getChallenges().subscribe(
       data => {
         console.log('** data ' , data);
         
 
         for (let i = 0; i < data.length; i++) {
 
         let challenge: Challenge = {
           points : data[i].points,
           title : data[i].title,
         };
 
         
         this.challengesList.push(challenge);
 
         console.log("toegevoegd : " + challenge.title);
 
         }
 
       }
     );
     return this.challengesList;
   }
}
