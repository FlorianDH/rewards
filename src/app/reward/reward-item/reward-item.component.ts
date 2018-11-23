import { Component, Input, OnInit } from '@angular/core';
import {RewardService} from '../../services/reward.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
// import {Claim}
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-reward-item',
  templateUrl: './reward-item.component.html',
  styles: []
})
export class RewardItemComponent implements OnInit {

  @Input() rewardsList: any;

  user = JSON.parse(localStorage.getItem('user'));

  // Constructor(public rewardService: RewardService, private modalService: NgbModal) { }
  // today = new Date();
  // jstoday = '';

  ngOnInit() {
  }

  open(content, i) {
    // this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {}, (reason) => {});
  }
}
