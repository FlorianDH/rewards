import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ChallengeService} from '../services/challenge.service';
import {Challenge} from '../interfaces/challenge';
import { Router } from '@angular/router';


@Component({
  selector: 'app-challengeform',
  templateUrl: './challengeForm.component.html'
})
export class ChallengeFormComponent implements OnInit {

  constructor(private challengeService: ChallengeService, private router: Router) {

  }



  ngOnInit() {
if (localStorage.getItem('title') !== null && localStorage.getItem('points') !== null) {

    (<HTMLInputElement>document.getElementById('title')).value = localStorage.title;
    (<HTMLInputElement>document.getElementById('points')).value = localStorage.points;
    localStorage.removeItem('title');
    localStorage.removeItem('points');

}

}

addChallenge() {

  let title= (<HTMLInputElement>document.getElementById('title')).value;
  let points = (<HTMLInputElement>document.getElementById('points')).value;
  this.challengeService.addChallenge(title, points).subscribe();
  this.router.navigate(["admin"]);

}



editChallenge() {
  let id = localStorage.id;
  let title= (<HTMLInputElement>document.getElementById('title')).value;
  let points = (<HTMLInputElement>document.getElementById('points')).value;
  this.challengeService.EditChallenge(id,title,points);
  localStorage.removeItem('id');
  localStorage.removeItem('title');
  localStorage.removeItem('points');
  this.router.navigate(["admin"]);

}
}
