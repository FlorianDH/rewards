import { Injectable } from '@angular/core';
import { DataService } from 'src/app/data.service';
import {Challenge} from '../../interfaces/Challenge';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ChallengeService {


  challengesList : Challenge[];
  
  constructor(public data : DataService, private http: HttpClient) {} 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };


  addChallangeRequest (request: Request): Observable<Request> {
    return this.http.post<Request>('http://localhost:3000/challenges', request, this.httpOptions)
      .pipe(
        // catchError("this.handleError('addHero', hero)")
      );
  }


   getChallenges(){

    this.challengesList = [];
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
 
         }
 
       }
     );
     return this.challengesList;
   }
}
