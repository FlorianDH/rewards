import { Component, OnInit } from '@angular/core';
import { RewardService} from '../services/reward.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  // styles: [`
  //   ngb-progressbar {
  //     margin-top: 5rem;
  //   }
  // `]
})
export class RewardComponent implements OnInit {

  loading = false;                                    // (1)
  currentReward$: Observable<any>;                   // (2)

  constructor(private rewardService: RewardService) {   // (3)
  }

  getRewards() {
    this.loading = true;
    this.currentReward$ = this.rewardService.getRewards$()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      );
  }

  ngOnInit() {
    this.getRewards();
  }

}
