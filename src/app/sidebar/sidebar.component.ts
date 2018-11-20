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

  ngOnInit() {
  }
  logOut(){
    localStorage.removeItem("user");
    this.router.navigate(["login"]);
  }
}
