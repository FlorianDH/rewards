import { Component, OnInit } from '@angular/core';
import { RewardService} from '../services/reward.service';
import { Reward} from '../interfaces/reward';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html'
})
export class RewardComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user'));
  rewardsList: Reward[] = [];
  points = this.rewardService.points;
  constructor(private rewardService: RewardService) {
    this.rewardService.getPunten();
    console.log(this.rewardService.points);
  }

  ngOnInit() {
    console.log(this.rewardService.points)
    this.rewardsList = this.rewardService.getRewards();

  }
  receiveValue($event) {
    this.points = $event;
  }
}
