import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from './challenge.component';
import { ChallengeService } from './services/challenge.service';

@NgModule({
  imports: [
    CommonModule,
   
    
  ],
  declarations: [
    ChallengeComponent,
  ],
  providers:[ ChallengeService]

})
export class ChallengeModule { }
