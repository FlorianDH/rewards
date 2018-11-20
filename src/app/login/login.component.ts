import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    
  }
  setUser(data){
    localStorage.setItem("user",data.myName);
    window.location.reload();
  }
}
