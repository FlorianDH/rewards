import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { DataService } from 'src/app/services/data.service';
import { Challenge } from '../interfaces/challenge';


@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  challengesList : Challenge[]  = [];
  
  constructor(public data : DataService, private http: HttpClient) {} 

  

  // addChallangeRequest (request: any) : Observable<any>{

  //   console.log("request voor de post : " + request.motivation);

   


  //   return this.http.post<Request>('http://localhost:3000/challengeRequests', request, this.httpOptions)
  //   .map(res => res.json())
  //   .catch(err => Observable.throw(err));
  // }



   getChallenges() {

     if (this.challengesList.length <= 0) {
       
     
     this.data.getChallenges().subscribe(
       data => {
         console.log('** data ' , data);


         for (let i = 0; i < data.length; i++) {

         let challenge: Challenge = {
           points : data[i].points,
           title : data[i].title,
           _id : data[i]._id,
         };


         this.challengesList.push(challenge);
 
         console.log("id van persoon " + i + " : " + challenge._id);

         console.log('toegevoegd : ' + challenge.title);

         }

       }
     );

    }
     return this.challengesList;
   }
}
