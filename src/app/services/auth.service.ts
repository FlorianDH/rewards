import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  showNav(): boolean{
    let path = window.location.pathname;
    let page = path.split("/").pop();

    if ((page.trim() === "")) {
      return false;
    }
    else
      return true;
  } 
}
