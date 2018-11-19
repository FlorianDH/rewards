import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgBootstrapModule} from './sharedModules/ng-bootstrap.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RewardModule } from './reward/reward.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChallengeModule} from './challenge/challenge.module';
import { AchievementComponent } from './achievement/achievement.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AchievementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgBootstrapModule,

    NgbModule.forRoot(),
    RewardModule,
    ChallengeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
