import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  // styles: [`
  //   ngb-progressbar {
  //     margin-top: 5rem;
  //   }
  // `]
})
export class ChallengeComponent implements OnInit {

  // constructor(public data: DataService) { }

  ngOnInit() {

    // console.log("alle challenges : " + this.data.getChallenges());
  }

}
