import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from './challenge.component';
import { ChallengeService } from './services/challenge.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ChallengeComponent,
    
  ],
  providers:[ ChallengeService]

})
export class ChallengeModule { }
