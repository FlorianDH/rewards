import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './rewardForm.component.html',
  styles: [`
    ngb-progressbar {
      margin-top: 5rem;
    }
  `]
})
export class RewardFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
