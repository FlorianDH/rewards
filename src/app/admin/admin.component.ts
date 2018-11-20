import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../services/challenge.service';
import { Challenge } from '../interfaces/challenge';
import { RewardService } from '../services/reward.service';
import { Reward } from '../interfaces/reward';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {
  challengesList: Challenge[] = [];
  rewardsList: Reward[] = [];
  constructor(private challengeService: ChallengeService, private rewardService: RewardService) {  }

  ngOnInit() {
    this.challengesList = this.challengeService.getChallenges();
    this.rewardsList = this.rewardService.getRewards();
  }

}
