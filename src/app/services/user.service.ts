import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './data.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[] = [];
  // user: User;

  constructor(private dataService: DataService, private http: HttpClient) { }

  getUser(id) {
    this.dataService.getUserById().subscribe(
      data => {
        const user: User = {
          _id: data._id,
          name: data.name,
          isAdmin: data.isAdmin,
          currentPoints: data.currentPoints,
          totalPoints: data.totalPoints
        };
      });
    return this.user;
  }

  getUsers() {

    if (this.userList.length <= 0) {

     this.dataService.getUsers().subscribe(
       data => {

         for (let i = 0; i < data.length; i++) {
          if (data[i].isAdmin === false) {
            const user: User = {
              _id: data[i]._id,
              name: data[i].name,
              password: '***',
              isAdmin: data[i].isAdmin
             };
             this.userList.push(user);
          }
         }
     );
    }
     return this.userList;
   }
   deleteUser(id) {
     const token = localStorage.getItem('token').split('"');
     const headers: HttpHeaders = new HttpHeaders({
       'Authorization': 'bearer ' + token[1]
     });
     const index = this.userList.indexOf(this.userList.find(user => user.id == id));
     this.userList.splice(index, 1);
    return this.http.delete<any>('https://reward-platform-api.herokuapp.com/users/' + id, {headers}).subscribe();
   }
   addUser(name, password, punten) {
    const token = localStorage.getItem('token').split('"');
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'bearer ' + token[1]
    });
    return this.http.post<any>('https://reward-platform-api.herokuapp.com/users', {'name': name, 'password': password, 'punten': punten});
   }
}
