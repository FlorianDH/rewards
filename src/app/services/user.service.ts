import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { DataService } from './data.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[] = [];

  constructor(private dataService:DataService,private http: HttpClient) { }
  getUsers() {

    if (this.userList.length <= 0) {

     this.dataService.getUsers().subscribe(
       data => {

         for (let i = 0; i < data.length; i++) {

         let user: User = {
          id: data[i]._id,
          name: data[i].name,
          password: "***",
          isAdmin: data[i].isAdmin
         };
        

         this.userList.push(user);

         }

       }
     );
    }
     return this.userList;
   }

}
