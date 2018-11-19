import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RewardComponent} from './reward/reward.component';

const routes: Routes = [
  {path: 'reward', component: RewardComponent},
  // {
  //   path: '',
  //   component: loginComponent
  // },
  // {
  //   path: 'rewards',
  //   component: rewardComponent
  // },
  // {
  //   path: 'achievements',
  //   component: achievementComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
