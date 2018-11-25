import { Component, OnInit, ReflectiveInjector, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';
import { ChallengeService } from '../services/challenge.service';
import { Challenge } from '../interfaces/challenge';
import { Request } from '../interfaces/request';
import { formatDate } from '@angular/common';
import { RewardService } from '../services/reward.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html'
})
export class ChallengeComponent implements OnInit {

  challengesList: Challenge[] = [];
  @Input() request: Request;
  user = JSON.parse(localStorage.getItem('user'));

  constructor(public challengeService: ChallengeService, public rewardService: RewardService,private http:HttpClient) {}
  points = this.rewardService.points;
  ngOnInit() {
    this.http.get<any>('https://reward-platform-api.herokuapp.com/users/'+ this.user._id).subscribe(
      data => {
        this.user = data.user;
      }
    );
    this.points = this.user.currentPoints;
    this.challengesList = this.challengeService.getChallenges();
  }
}
