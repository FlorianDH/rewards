import { Injectable } from '@angular/core';
import { Request } from '../interfaces/request';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  requestList : Request[] = [];


  constructor(public data: DataService,private http: HttpClient) { }

  deleteRequest(id: any, i : any): any {
    this.requestList.splice(i, 1);
    return this.http.delete<any>('https://reward-platform-api.herokuapp.com/challengeRequests/'+ id).subscribe();
   
  }


  getRequests() {
    if (this.requestList.length <= 0) {

    this.data.getRequests().subscribe(
      data => {
        console.log('** data ' , data);


        for (let i = 0; i < data.length; i++) {

        const request: Request = {
          motivation : data[i].motivation,
          challenge_id : data[i].challenge,
          _id : data[i]._id,
          date : data[i].date,
          isAccepted : data[i].isAccepted,
          user_id : data[i].user,
        };


        this.requestList.push(request);

        

        }

      }
    );

   }
    return this.requestList;
  }



}
