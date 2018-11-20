import { Component } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { AuthService } from './services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // animations: [
  //   trigger('slideInOut', [
  //     state('in', style({
  //       transform: 'translate3d(0, 0, 0)'
  //     })),
  //     state('out', style({
  //       transform: 'translate3d(100%, 0, 0)'
  //     })),
  //     transition('in => out', animate('400ms ease-in-out')),
  //     transition('out => in', animate('400ms ease-in-out'))
  //   ]),
  // ]
})
export class AppComponent {
  title = 'jstack rewards';
  navVisible = true;

  constructor(private authService:AuthService,private router:Router) {
  router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      this.navVisible = this.authService.showNav();
    }
  });
}
  // sidebarState = 'out';
  // showSidebar() {
  //   this.sidebarState = this.sidebarState === 'out' ? 'in' : 'out';
  // }
}
