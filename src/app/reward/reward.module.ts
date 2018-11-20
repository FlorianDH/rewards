import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RewardComponent } from './reward.component';
import { RewardItemComponent } from './reward-item/reward-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RewardComponent, RewardItemComponent]
})
export class RewardModule { }
