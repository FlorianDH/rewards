import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './employeeForm.component.html',
  styles: [`
    ngb-progressbar {
      margin-top: 5rem;
    }
  `]
})
export class EmployeeFormComponent implements OnInit {
  user = {
    name: '',
    password: '',
    punten:''
  };
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }
  addUser(data){
    this.userService.addUser(data.name,data.password,data.punten).subscribe(data=>{
      this.router.navigate(["admin"])
    })
  }
}
