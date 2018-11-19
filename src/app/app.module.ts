import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgBootstrapModule} from './sharedModules/ng-bootstrap.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RewardModule } from './reward/reward.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginModule } from './login/login.module';
import { ChallengeModule} from './challenge/challenge.module';
<<<<<<< HEAD
import { AchievementComponent } from './achievement/achievement.component';
=======
import { FormModule} from './form/form.module';

>>>>>>> 5d4a3ce72550118b218d809f1d260659ef03124c

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
    ChallengeModule,
    FormModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
