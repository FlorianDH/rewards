import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../services/challenge.service';
import { Challenge } from '../interfaces/challenge';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html'
})
export class ChallengeComponent implements OnInit {


  challengesList: Challenge[] = [];



  constructor(private challengeService: ChallengeService) {  }

  ngOnInit() {
    this.challengesList = this.challengeService.getChallenges();

  }
}
