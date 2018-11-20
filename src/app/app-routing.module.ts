import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { RewardComponent } from './reward/reward.component';
import { AchievementComponent } from './achievement/achievement.component';
import { Error404Component } from './error404/error404.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  //{path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'challenge', component: ChallengeComponent},
  {path: 'reward', component: RewardComponent},
  {path: 'achievement', component: AchievementComponent},
  // {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'error404', component: Error404Component},
  {path: '**', redirectTo: 'error404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
