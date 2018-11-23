import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgBootstrapModule} from './sharedModules/ng-bootstrap.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RewardModule } from './reward/reward.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChallengeModule} from './challenge/challenge.module';
import { AchievementComponent } from './achievement/achievement.component';
import { FormModule} from './form/form.module';
import { Error404Module } from './error404/error404.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {ChallengeFormModule} from './challengeForm/challengeForm.module';
import {EmployeeFormModule} from './employeeform/employeeForm.module';
import {RewardFormModule} from './rewardForm/rewardForm.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AchievementComponent,
    LoginComponent
  ],
  imports: [
    FormModule,
    BrowserModule,
    AppRoutingModule,
    NgBootstrapModule,
    NgbModule.forRoot(),
    RewardModule,
    ChallengeModule,
    FormsModule,
    Error404Module,
    AdminModule,
    HttpClientModule,
    ChallengeFormModule,
    EmployeeFormModule,
    RewardFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
