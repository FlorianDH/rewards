import { Component, Input, OnInit } from '@angular/core';
import { RewardService } from '../../services/reward.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  ngOnInit() {
  }

  rewardClaimed(content, i) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {}, (reason) => {});

    this.jstoday = formatDate(this.today, 'MM-dd-yyyy hh:mm:ss', 'en-US', '+00:00');

    this.claim = {
      reward_id : this.rewardsList[i]._id,
      date : this.jstoday,
      received : false,
      user_id : this.user._id,
      _id : ''
    };

    this.rewardService.addRewardClaim(this.claim).subscribe(test => this);
    // TODO modal close
  }
}
