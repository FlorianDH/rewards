import { Injectable } from '@angular/core';
import { Request } from '../interfaces/request';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {


  requestList : Request[] = [];


  constructor(public data: DataService) { }




  getRequests() {
    if (this.requestList.length <= 0) {

    this.data.getRequests().subscribe(
      data => {
        console.log('** data ' , data);


        for (let i = 0; i < data.length; i++) {

        const request: Request = {
          motivation : data[i].motivation,
          challenge_id : data[i].challenge,
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
