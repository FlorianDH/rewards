import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../services/challenge.service';
import { Challenge } from '../interfaces/challenge';
import { RewardService } from '../services/reward.service';
import { Reward } from '../interfaces/reward';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';
import { RequestService } from '../services/request.service';
import { Request } from '../interfaces/request';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {
  challengesList: Challenge[] = [];
  rewardsList: Reward[] = [];
  usersList: User[] = [];
  requestList : Request[] = [];




  constructor(private requestService: RequestService, private challengeService: ChallengeService, private rewardService: RewardService,private userService:UserService) {  }

  ngOnInit() {
    this.challengesList = this.challengeService.getChallenges();
    this.rewardsList = this.rewardService.getRewards();
    this.usersList = this.userService.getUsers();
    this.requestList = this.requestService.getRequests();

    
  }


  deleteRequest(i){
    console.log(i);
  }

}
