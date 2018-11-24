import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { Challenge } from '../interfaces/challenge';
import { Request } from '../interfaces/request';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  challengesList: Challenge[]  = [];

  constructor(public data: DataService, private http: HttpClient) {}


  addChallangeRequest (request: Request): Observable<Request> {

    console.log('request voor de post : ' + request.motivation);
    console.log('request voor de post : ' + request.challenge_id);

    let token = localStorage.getItem("token").split('"')
    let headers : HttpHeaders = new HttpHeaders({
      "Authorization":"bearer "+token[1]
    });


    return this.http.post<Request>('https://reward-platform-api.herokuapp.com/challengeRequests/', request, {headers}).pipe(
    tap((request: Request) => this.log(`added challenge w/ id=${request.motivation}`)),
    catchError(err => throwError(err))
    );
  }

  private log(message: String) {

  }
  addChallenge (title: string, points: string): Observable<Challenge> {
    let token = localStorage.getItem("token").split('"')
    let headers : HttpHeaders = new HttpHeaders({
      "Authorization":"bearer "+token[1]
    });
    return this.http.post<Challenge>('https://reward-platform-api.herokuapp.com/challenges',{"title":title, "points":points}, {headers}).pipe(
      tap((challenge: Challenge) => this.log(`added challenge w/ title=${challenge.title}`)),
      catchError(err => throwError(err))
    );
  }

  deleteChallenge(id: any){
    let token = localStorage.getItem("token").split('"')
    let headers : HttpHeaders = new HttpHeaders({
      "Authorization":"bearer "+token[1]
    })
    let index = this.challengesList.indexOf(this.challengesList.find(challenge => challenge._id == id));
    this.challengesList.splice(index, 1);
   return this.http.delete<any>('https://reward-platform-api.herokuapp.com/challenges/'+id,{headers}).subscribe();
  }

  EditChallenge(id, title ,points) {
    let token = localStorage.getItem("token").split('"')
    let headers : HttpHeaders = new HttpHeaders({
      "Authorization":"bearer "+token[1]
    })
    let index = this.challengesList.indexOf(this.challengesList.find(challenge => challenge._id == id));
    this.challengesList.splice(index, 1);
   return this.http.patch<any>('https://reward-platform-api.herokuapp.com/challenges/'+id, {
    "title": title,
    "points": points}, 
    {headers}).subscribe();

  }


   getChallenges() {
     if (this.challengesList.length <= 0) {

     this.data.getChallenges().subscribe(
       data => {


         for (let i = 0; i < data.length; i++) {

         const challenge: Challenge = {
           points : data[i].points,
           title : data[i].title,
           _id : data[i]._id,
         };


         this.challengesList.push(challenge);

         }

       }
     );

    }
     return this.challengesList;
   }
}
