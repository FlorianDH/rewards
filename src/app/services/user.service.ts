import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
          if(data[i].isAdmin == false){
            let user: User = {
              id: data[i]._id,
              name: data[i].name,
              password: "***",
              isAdmin: data[i].isAdmin
             };
            
    
             this.userList.push(user);
          }


         }

       }
     );
    }
     return this.userList;
   }
   deleteUser(id){
     let index = this.userList.indexOf(this.userList.find(user => user.id == id));
     this.userList.splice(index, 1);
    return this.http.delete<any>('https://reward-platform-api.herokuapp.com/users/'+id).subscribe()
   }
}
