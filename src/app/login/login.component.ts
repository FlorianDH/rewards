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
  error='';
  constructor(private api:AuthService,private router: Router) { }

  ngOnInit() {
  }
  setUser(data){
    this.loading = true;
    this.api.login(data.myName,data.myPassword).pipe().subscribe(token=> {
      let user = JSON.parse(localStorage.getItem("user"));
      localStorage.setItem("admin",user.isAdmin);
      this.router.navigate(["admin"])
    },error =>{
      this.loading = false;
      this.error = "Verkeerd wachtwoord of naam";
    }
      
      )
  }
}
