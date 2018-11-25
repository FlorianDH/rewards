import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'jstack rewards';
  navVisible = true;

  constructor(private authService: AuthService, private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.navVisible = this.authService.showNav();
      }
      localStorage.setItem("teller","0")
    });
  }
}
