import { Component, OnInit } from '@angular/core';
import { RewardService} from '../services/reward.service';
import { Reward} from '../interfaces/reward';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html'
})
export class RewardComponent implements OnInit {

  rewardsList: Reward[] = [];
  user = JSON.parse(localStorage.getItem('user'));

  constructor(private rewardService: RewardService) {}

  ngOnInit() {
    this.rewardsList = this.rewardService.getRewards();
  }
}
