import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgBootstrapModule} from './sharedModules/ng-bootstrap.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RewardModule } from './reward/reward.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgBootstrapModule,
<<<<<<< HEAD
  
=======
    NgbModule.forRoot(),
    RewardModule
>>>>>>> 2296891d062d74af01f236fc07cbfdc0e3016902
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
