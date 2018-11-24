import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RewardService } from '../services/reward.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './rewardForm.component.html',
  styles: [`
    ngb-progressbar {
      margin-top: 5rem;
    }
  `]
})
export class RewardFormComponent implements OnInit {

  constructor(private rewardService: RewardService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('title') !== null && localStorage.getItem('points') !== null) {

      (<HTMLInputElement>document.getElementById('title')).value = localStorage.title;
      (<HTMLInputElement>document.getElementById('points')).value = localStorage.points;
      localStorage.removeItem('title');
      localStorage.removeItem('points');
  
  }
  }

  addReward() {

  let title= (<HTMLInputElement>document.getElementById('title')).value;
  let points = (<HTMLInputElement>document.getElementById('points')).value;
  this.rewardService.addReward(title, points).subscribe();
  this.router.navigate(["admin"]);
  }

  removeReward()
{
  let id = localStorage.id;
  this.rewardService.deleteReward(id);
  localStorage.removeItem('id');
  this.router.navigate(["admin"]);
 
}

editReward() {
  let id = localStorage.id;
  let title= (<HTMLInputElement>document.getElementById('title')).value;
  let points = (<HTMLInputElement>document.getElementById('points')).value;
  this.rewardService.EditReward(id,title,points);
  localStorage.removeItem('id');
  localStorage.removeItem('title');
  localStorage.removeItem('points');
  this.router.navigate(["admin"]);

}

}
