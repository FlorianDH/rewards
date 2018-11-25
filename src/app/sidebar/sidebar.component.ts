import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);

    this.collapse == false;
  }
  collapse : Boolean;
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


  openSidebar(){

    if (this.collapse === true) {
      this.collapse = false;
    }else{
      this.collapse = true;
    }
    
    let elems = document.getElementsByClassName('sidebar-text');
    if(this.collapse === true){
      

      for (var i=0;i<elems.length;i+=1){
        elems[i]["style"].display = "inline";
      }

    }else{
      this.collapse = false;

      for (var i=0;i<elems.length;i+=1){
        elems[i]["style"].display = "none";
      }
    }

    

    
  }
}
