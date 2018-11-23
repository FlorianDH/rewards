import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


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
if (localStorage.getItem('title') !== null && localStorage.getItem('punten') !== null) {

    (<HTMLInputElement>document.getElementById('title')).value = localStorage.title;
    (<HTMLInputElement>document.getElementById('points')).value = localStorage.punten;
    localStorage.removeItem('title');
    localStorage.removeItem('punten');

}

  }

}
