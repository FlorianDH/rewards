import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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

  constructor(private api:AuthService,private router: Router) { }

  ngOnInit() {
  }
  setUser(data){
    this.api.login(data.myName,data.myPassword).pipe().subscribe(data=>
      window.location.reload()
      );

  }
}
