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

  constructor(private challengeService: ChallengeService) {

  }



  ngOnInit() {
if (localStorage.getItem('title') !== null && localStorage.getItem('points') !== null) {

    (<HTMLInputElement>document.getElementById('title')).value = localStorage.title;
    (<HTMLInputElement>document.getElementById('points')).value = localStorage.punten;
    localStorage.removeItem('title');
    localStorage.removeItem('points');

}

}

addChallenge() {

  let points = (<HTMLInputElement>document.getElementById('title')).value;
  let title = (<HTMLInputElement>document.getElementById('points')).value;

   this.challengeService.addChallenge(title, points);
}



}
