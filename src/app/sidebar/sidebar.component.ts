import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }
  currentUrl: string;
  admin = '';
  ngOnInit() {
    if(localStorage.getItem('admin') === "true"){
      this.admin = localStorage.getItem('admin');
    }
    this.currentUrl = this.router.url
  }
  logOut(){
    localStorage.clear();
    this.router.navigate(["login"]);
  }
}
