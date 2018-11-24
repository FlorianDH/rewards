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
  constructor(private rewardService: RewardService) {}
  punten = this.user.currentPoints;
  ngOnInit() {
    this.rewardsList = this.rewardService.getRewards();
  }
  receiveValue($event){
    this.punten = $event;
  }
}
