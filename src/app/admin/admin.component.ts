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
import {ModalDismissReasons, NgbModal, NgbModalRef, NgbTabset} from '@ng-bootstrap/ng-bootstrap';


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
  claimList: Claim[] = [];

  constructor(private requestService: RequestService,
              private challengeService: ChallengeService,
              private rewardService: RewardService,
              private userService: UserService) {  }

  ngOnInit() {
    this.challengesList = this.challengeService.getChallenges();
    this.rewardsList = this.rewardService.getRewards();
    this.claimList = this.rewardService.getClaims();
    this.usersList = this.userService.getUsers();
    this.requestList = this.requestService.getRequests();
  }

  acceptRequest(i) {
    const id = this.requestList[i]._id;
    this.requestService.acceptRequest(id, i);
    this.requestList.splice(i, 1);
  }

  deleteRequest(i) {
  const id = this.requestList[i]._id;
  this.requestService.deleteRequest(id, i);
  }

  passDataChallenge(title, points, id) {
    const gegTitle = localStorage.setItem('title', title );
    const gegPunten = localStorage.setItem('points', points);
    const gegId = localStorage.setItem('id', id);
  }

  deleteUser(id) {
    this.userService.deleteUser(id);
  }
  claimReceived(i) {
  }
}
