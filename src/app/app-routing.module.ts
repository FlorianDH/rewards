import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RewardComponent} from './reward/reward.component';
import { LoginComponent } from './login/login.component';
import { ChallengeComponent} from './challenge/challenge.component';
import {FormComponent} from './form/form.component';

const routes: Routes = [
  {path: 'challenge', component: ChallengeComponent},
  {path: 'reward', component: RewardComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
