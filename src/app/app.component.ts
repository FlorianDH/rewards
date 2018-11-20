import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rewards';
  navVisible = true;
  screenWidth: number;

  constructor(private authService:AuthService,private router:Router) {
  // set screenWidth on page load
  this.screenWidth = window.innerWidth;
  window.onresize = () => {
    // set screenWidth on screen size change
    this.screenWidth = window.innerWidth;
  };
  router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      this.navVisible = this.authService.showNav();
    }
  });
}
}
