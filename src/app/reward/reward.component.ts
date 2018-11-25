import { Component, OnInit } from '@angular/core';
import { RewardService} from '../services/reward.service';
import { Reward} from '../interfaces/reward';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html'
})
export class RewardComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user'));
  rewardsList: Reward[] = [];
  points = this.rewardService.points;
  constructor(private rewardService: RewardService,private http:HttpClient) {
    this.rewardService.getPoints();
  }

  ngOnInit() {
    this.http.get<any>('https://reward-platform-api.herokuapp.com/users/'+ this.user._id).subscribe(
      data => {
        this.user = data.user;
      }
    );
    this.points = this.user.currentPoints;
    this.rewardsList = this.rewardService.getRewards();

  }
  receiveValue($event) {
    this.points = $event;
  }
}
