import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  user = {
    name: '',
    password: ''
  };
  loading = false;
  error = '';
  constructor(private api: AuthService, private router: Router) { }

  ngOnInit() {
  }
  setUser(data) {
    this.loading = true;
<<<<<<< HEAD
    this.api.login(data.myName, data.myPassword).pipe().subscribe(token => {
      const user = JSON.parse(localStorage.getItem('user'));
      localStorage.setItem('admin', user.isAdmin);
      this.router.navigate(['challenge']);
    }, error => {
=======
    this.api.login(data.myName,data.myPassword).pipe().subscribe(token=> {
      let user = JSON.parse(localStorage.getItem("user"));
      localStorage.setItem("admin",user.isAdmin);
      this.router.navigate(["admin"])
    },error =>{
>>>>>>> 38f6d07ad7633bddfcbcdad9011240d41eb6d789
      this.loading = false;
      this.error = 'Verkeerd wachtwoord of naam';
    }

    );
  }
}
