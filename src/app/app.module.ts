import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgBootstrapModule} from './sharedModules/ng-bootstrap.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RewardModule } from './reward/reward.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginModule } from './login/login.module';7

import { ChallengeModule} from './challenge/challenge.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgBootstrapModule,
    FormsModule,
    NgbModule.forRoot(),
    RewardModule,
    ChallengeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
