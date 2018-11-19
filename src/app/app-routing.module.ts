import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RewardComponent} from './reward/reward.component';
import { OpdrachtComponent} from './Opdracht/opdracht.component';

const routes: Routes = [
  {path: 'opdracht', component: OpdrachtComponent},
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
