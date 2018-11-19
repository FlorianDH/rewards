import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RewardComponent} from './reward/reward.component';
import { ChallengeComponent} from './challenge/challenge.component';
import { AchievementComponent } from './achievement/achievement.component';

const routes: Routes = [
  {path: 'challenge', component: ChallengeComponent},
  {path: 'reward', component: RewardComponent},
  {path: 'achievement', component: AchievementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
