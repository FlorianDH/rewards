import { Component, OnInit, ReflectiveInjector, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';
import { ChallengeService } from '../services/challenge.service';
import { Challenge } from '../interfaces/challenge';
import { Request } from '../interfaces/request';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html'
})
export class ChallengeComponent implements OnInit {

  challengesList: Challenge[] = [];
  @Input() request: Request;
  user = JSON.parse(localStorage.getItem('user'));

  constructor(public challengeService: ChallengeService) {}

  ngOnInit() {
    this.challengesList = this.challengeService.getChallenges();
  }
}
