import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(localStorage.getItem("token")){
        if(localStorage.getItem("admin")==="true"){
          return true
        }else{
          this.router.navigate(['challenge']);
        }
      }
      return true;
  }
}
