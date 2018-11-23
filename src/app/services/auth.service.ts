import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  showNav(): boolean{
    let path = window.location.pathname;
    let page = path.split("/").pop();

    if ((page.trim() === "") || (page.trim() === "login")) {
      return false;
    }
    else
      return true;
  }

  login(username:string,password:string){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Access-Control-Allow-Origin", "*");
    return this.http.post<any>("https://reward-platform-api.herokuapp.com/users/auth",{"name":username,"password":password})
    .pipe(map(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', JSON.stringify(user.token));
      }
      return user;
  }));
  }
}
