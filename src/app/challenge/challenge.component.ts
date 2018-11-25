import { Component, OnInit, ReflectiveInjector, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';
import { ChallengeService } from '../services/challenge.service';
import { Challenge } from '../interfaces/challenge';
import { Request } from '../interfaces/request';
import { formatDate } from '@angular/common';
import { RewardService } from '../services/reward.service';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html'
})
export class ChallengeComponent implements OnInit {

  challengesList: Challenge[] = [];
  @Input() request: Request;
  user = JSON.parse(localStorage.getItem('user'));

  constructor(public challengeService: ChallengeService,public rewardService: RewardService) {}
  punten = this.rewardService.punten;
  ngOnInit() {

    this.challengesList = this.challengeService.getChallenges();
  }
}
