import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RewardComponent} from './reward/reward.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'reward',
     component: RewardComponent
  },
  {
    path: '',
    component: LoginComponent
  }
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
