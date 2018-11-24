import { Injectable } from '@angular/core';
import { Request } from '../interfaces/request';
import { DataService } from './data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  requestList: Request[] = [];
  requestHistoryList: Request[] = [];

  constructor(private userService: UserService, public data: DataService, private http: HttpClient) {}

  private log(message: String) {

  }

   acceptRequest (id: any, i: any) {
    let token = localStorage.getItem("token").split('"')
    let headers : HttpHeaders = new HttpHeaders({
      "Authorization":"bearer "+token[1]
    });

    this.requestList[i].isAccepted = true;

    let user = this.requestList[i].user_id;
    let challenge = this.requestList[i].challenge_id;

    user.currentPoints += challenge.points;
    user.totalPoints += challenge.points;

    this.userService.updateUser(user._id, user.currentPoints, user.totalPoints);

    this.requestList[i].isAccepted = true;

    return this.http.patch("https://reward-platform-api.herokuapp.com/challengeRequests/" + id, [{
      "propName": "isAccepted", "value" : "true"
      }],  {headers} ).subscribe(
        data => {
            console.log("PUT Request is successful ", data);
        },
        error => {
            console.log("Error", error);
        }
    );

  }

  deleteRequest(id: any, i: any): any {

    let token = localStorage.getItem("token").split('"')
    let headers : HttpHeaders = new HttpHeaders({
      "Authorization":"bearer "+token[1]
    });

    this.requestList.splice(i, 1);
    return this.http.delete<any>('https://reward-platform-api.herokuapp.com/challengeRequests/' + id, {headers}).subscribe();
  }

  getRequests() {
    if (this.requestList.length <= 0) {

    this.data.getRequests().subscribe(
      data => {


        for (let i = 0; i < data.length; i++) {

        if (data[i].isAccepted === false) {

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
      }
    );
   }
    return this.requestList;
  }

  getRequestsHistory() {
    if (this.requestHistoryList.length <= 0) {

      this.data.getRequests().subscribe(
        data => {
          for (let i = 0; i < 20; i++) {
            if (data[i].isAccepted === true) {

              const request: Request = {
                motivation : data[i].motivation,
                challenge_id : data[i].challenge,
                _id : data[i]._id,
                date : data[i].date,
                isAccepted : data[i].isAccepted,
                user_id : data[i].user,
              };
              this.requestHistoryList.push(request);
            }
          }
        }
      );
    }
    return this.requestHistoryList;
  }
}
