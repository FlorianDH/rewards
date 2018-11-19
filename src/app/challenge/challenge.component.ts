import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styles: [`
    ngb-progressbar {
      margin-top: 5rem;
    }
  `]
})
export class ChallengeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
