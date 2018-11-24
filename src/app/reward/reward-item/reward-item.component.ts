import { Component, Input, OnInit } from '@angular/core';
import { RewardService } from '../../services/reward.service';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';
import { Claim } from '../../interfaces/claim';

@Component({
  selector: 'app-reward-item',
  templateUrl: './reward-item.component.html',
  styles: []
})
export class RewardItemComponent implements OnInit {

  @Input() rewardsList: any;
  @Input() claim: Claim;

  user = JSON.parse(localStorage.getItem('user'));

  constructor(public rewardService: RewardService, private modalService: NgbModal) { }
  today = new Date();
  jstoday = '';
  modalReference: NgbModalRef;
  closeResult;
  ngOnInit() {
  }

  rewardClaimed(content, i) {
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.jstoday = formatDate(this.today, 'MM-dd-yyyy hh:mm:ss', 'en-US', '+00:00');
    this.claim = {
      reward_id : this.rewardsList[i]._id,
      date : this.jstoday,
      received : false,
      user_id : this.user._id[i]._id,
      _id : ''
    };

    this.rewardService.addRewardClaim(this.claim).subscribe();
  }
  close() {
    this.modalReference.close();
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
