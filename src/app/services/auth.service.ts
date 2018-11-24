import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  showNav(): boolean {
    let path = window.location.pathname;
    let page = path.split('/').pop();

    if ((page.trim() === '') || (page.trim() === 'login')) {
      return false;
    } else {
      return true;
    }
  }

  login(username: string, password: string) {
    const helper = new JwtHelperService();

    return this.http.post<any>('https://reward-platform-api.herokuapp.com/users/auth', {'name': username, 'password': password})
    .pipe(map(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
          const decodedToken = helper.decodeToken(user.token);
          localStorage.setItem('user', JSON.stringify(decodedToken));
          localStorage.setItem('token', JSON.stringify(user.token));
      }
      return user;
  }));
  }
}
