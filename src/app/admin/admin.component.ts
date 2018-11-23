import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../services/challenge.service';
import { Challenge } from '../interfaces/challenge';
import { RewardService } from '../services/reward.service';
import { Reward } from '../interfaces/reward';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {
  challengesList: Challenge[] = [];
  rewardsList: Reward[] = [];
  usersList: User[] = [];
  constructor(private challengeService: ChallengeService, private rewardService: RewardService,private userService:UserService) {  }

  ngOnInit() {
    this.challengesList = this.challengeService.getChallenges();
    this.rewardsList = this.rewardService.getRewards();
    this.usersList = this.userService.getUsers();

  }

  gegevensMeegeven(title, points) {
    const gegTitle = localStorage.setItem('title', title );
    const gegPunten = localStorage.setItem('points', points);
  }
  deleteUser(id){
    this.userService.deleteUser(id);
  }
}
