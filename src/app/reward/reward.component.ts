import { Component, OnInit } from '@angular/core';
import { RewardService} from '../services/reward.service';
import { Reward} from '../interfaces/reward';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html'
})
export class RewardComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user'));
  rewardsList: Reward[] = [];
<<<<<<< HEAD
=======

>>>>>>> cb708fec32039f4cf507d740786419b2bcdb1d2b

  constructor(private rewardService: RewardService) {}

  ngOnInit() {
    this.rewardsList = this.rewardService.getRewards();
  }
}
