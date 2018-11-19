import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgBootstrapModule} from './sharedModules/ng-bootstrap.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RewardModule } from './reward/reward.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginModule } from './login/login.module';
import { SidebarModule } from 'ng-sidebar';
import { ChallengeModule} from './challenge/challenge.module';
import { AchievementComponent } from './achievement/achievement.component';
import { FormModule} from './form/form.module';
import { Error404Module } from './error404/error404.module';
import { AdminModule } from './admin/admin.module';

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
    LoginModule,
    SidebarModule.forRoot(),
    FormModule,
    LoginModule,
    Error404Module,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
