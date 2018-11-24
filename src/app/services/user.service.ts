import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './data.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[] = [];

  constructor(private dataService: DataService, private http: HttpClient) { }
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
                isAdmin: data[i].isAdmin,
                currentPoints: data[i].currentPoints,
                totalPoints: data[i].totalPoints
              };
              this.userList.push(user);
            }
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
     const index = this.userList.indexOf(this.userList.find(user => user._id === id));
     this.userList.splice(index, 1);
    return this.http.delete<any>('https://reward-platform-api.herokuapp.com/users/' + id, {headers}).subscribe();
   }

  addUser(name, password, points) {
    const token = localStorage.getItem('token').split('"');
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'bearer ' + token[1]
    });
    return this.http.post<any>(
      'https://reward-platform-api.herokuapp.com/users',
      { 'name': name, 'password': password, 'points': points},
      {headers});
   }

   updateUser (id: any, currentPoints: any, totalPoints: any) {
    const token = localStorage.getItem('token').split('"');
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'bearer ' + token[1]
    });

    return this.http.patch('https://reward-platform-api.herokuapp.com/users/' + id, [
      {
      'propName': 'currentPoints', 'value' : currentPoints
      },
      {
        'propName': 'totalPoints', 'value' : totalPoints
        }
      ],  {headers} ).subscribe(
        data => {
            console.log('PUT Request is successful ', data);
        },
        error => {
            console.log('Error', error);
        }
    );

  }

}
