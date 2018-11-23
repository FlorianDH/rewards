import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from './challenge.component';
import { ChallengeService } from '../services/challenge.service';
import { HttpClientModule } from '@angular/common/http';
import { ChallengeItemComponent } from './challenge-item/challenge-item.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ChallengeComponent,
    ChallengeItemComponent,

  ],
  providers:[ ChallengeService]

})
export class ChallengeModule { }
