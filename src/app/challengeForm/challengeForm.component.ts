import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ChallengeService} from '../services/challenge.service';
import {Challenge} from '../interfaces/challenge';


@Component({
  selector: 'app-form',
  templateUrl: './challengeForm.component.html',
  styles: [`
    ngb-progressbar {
      margin-top: 5rem;
    }
  `]
})
export class ChallengeFormComponent implements OnInit {

  constructor() {

  }



  ngOnInit() {
if (localStorage.getItem('title') !== null && localStorage.getItem('points') !== null) {

<<<<<<< HEAD
    (<HTMLInputElement>document.getElementById('title')).value = localStorage.title;
    (<HTMLInputElement>document.getElementById('points')).value = localStorage.punten;
=======
    document.getElementById('title').value = localStorage.title;
    document.getElementById('points').value = localStorage.points;
>>>>>>> d38f97b5a197c5ec3abed3d7ca29295c38d6229e
    localStorage.removeItem('title');
    localStorage.removeItem('points');

}

}

/*addChallenge()
{
  const challenge = new Challenge();
  challenge.points = document.getElementById('points').value;
  challenge.title = document.getElementById('title').value;

}*/



}
