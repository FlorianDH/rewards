import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { RewardComponent } from './reward/reward.component';
import { AchievementComponent } from './achievement/achievement.component';
import { Error404Component } from './error404/error404.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { LogGuard } from './guards/log.guard';
import { AdminGuard } from './guards/admin.guard';
import { ChallengeFormComponent} from './challengeForm/challengeForm.component';
import { RewardFormComponent } from './rewardForm/rewardForm.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full',canActivate:[AuthGuard]},
  {path: 'challenge', component: ChallengeComponent,canActivate:[LogGuard]},
  {path: 'reward', component: RewardComponent,canActivate:[LogGuard]},
  {path: 'achievement', component: AchievementComponent,canActivate:[LogGuard]},
  {path: 'rewardForm', component: RewardFormComponent,canActivate:[LogGuard]},
  {path: 'login', component: LoginComponent,canActivate:[AuthGuard]},
  {path: 'admin', component: AdminComponent,canActivate:[AdminGuard]},
  {path: 'error404', component: Error404Component},
  {path: 'challengeForm', component: ChallengeFormComponent},
  {path: '**', redirectTo: 'error404', canActivate: [LogGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
