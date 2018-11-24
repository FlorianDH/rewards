import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateDatePipe } from './translate-date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TranslateDatePipe],
  exports: [TranslateDatePipe]
})
export class PipesModule { }
