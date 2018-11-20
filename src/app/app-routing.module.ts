import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { RewardComponent } from './reward/reward.component';
import { AchievementComponent } from './achievement/achievement.component';
import { Error404Component } from './error404/error404.component';
import { AdminComponent } from './admin/admin.component';
import { RewardFormComponent} from './rewardForm/rewardForm.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full',canActivate:[AuthGuard]},
  {path: 'challenge', component: ChallengeComponent},
  {path: 'reward', component: RewardComponent},
  {path: 'achievement', component: AchievementComponent},
  {path: 'form', component: RewardFormComponent},
  {path: 'login', component: LoginComponent,canActivate:[AuthGuard]},
  {path: 'admin', component: AdminComponent},
  {path: 'error404', component: Error404Component},
  {path: '**', redirectTo: 'error404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
