import { Component, Input, OnInit } from '@angular/core';
import { ChallengeService } from '../services/challenge.service';
import { Challenge } from '../interfaces/challenge';
import { RewardService } from '../services/reward.service';
import { Reward } from '../interfaces/reward';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';
import { RequestService } from '../services/request.service';
import { Request } from '../interfaces/request';
import { Claim} from '../interfaces/claim';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})

export class AdminComponent implements OnInit {

  challengesList: Challenge[] = [];
  rewardsList: Reward[] = [];
  usersList: User[] = [];
  requestList: Request[] = [];
  requestHistoryList: Request[] = [];
  claimList: Claim[] = [];
  claimHistoryList: Claim[] = [];
  success = false;
  user = {
    name: '',
    password: '',
    points: ''
  };

  constructor(private requestService: RequestService,
              private challengeService: ChallengeService,
              private rewardService: RewardService,
              private userService: UserService,
              private router: Router) {  }

  ngOnInit() {
    this.challengesList = this.challengeService.getChallenges();
    this.rewardsList = this.rewardService.getRewards();
    this.claimList = this.rewardService.getClaims();
    this.claimHistoryList = this.rewardService.getClaimsHistory();
    this.usersList = this.userService.getUsers();
    this.requestList = this.requestService.getRequests();
    this.requestHistoryList = this.requestService.getRequestsHistory();
  }

  acceptRequest(i) {
    const id = this.requestList[i]._id;
    this.requestService.acceptRequest(id, i);
    this.requestList.splice(i, 1);
  }

  rewardReceived(i) {
    const id = this.claimList[i]._id;
    this.rewardService.rewardReceived(id, i);
    this.claimList.splice(i, 1);
  }

  deleteRequest(i) {
  const id = this.requestList[i]._id;
  this.requestService.deleteRequest(id, i);
  }

  passDataChallenge(title, points, id) {
    localStorage.setItem('title', title );
    localStorage.setItem('points', points);
    localStorage.setItem('id', id);
  }

  passDataReward(title, points, id) {
    localStorage.setItem('title', title );
    localStorage.setItem('points', points);
    localStorage.setItem('id', id);
  }

  addUser(data) {
    this.userService.addUser(data.name, data.password, data.points).subscribe(data=>{
      this.success = true;
      setTimeout(function(){ window.location.reload()}, 1000);
    });
  }

  deleteUser(id) {
    this.userService.deleteUser(id);
  }

  addChallenge() {
    let title= (<HTMLInputElement>document.getElementById('titlechallenge')).value;
    let points = (<HTMLInputElement>document.getElementById('pointschallenge')).value;
    this.challengeService.addChallenge(title, points).subscribe();
    this.success = true
      setTimeout(function(){ window.location.reload() }, 1000);

  }
  removeChallenge(id) {
    this.challengeService.deleteChallenge(id);
  }

  addReward() {
    let title= (<HTMLInputElement>document.getElementById('titlereward')).value;
    let points = (<HTMLInputElement>document.getElementById('pointsreward')).value;
    this.rewardService.addReward(title, points).subscribe();
    this.success = true
      setTimeout(function(){ window.location.reload() }, 1000);
  }

  removeReward(id) {
    this.rewardService.deleteReward(id);
  }
}
