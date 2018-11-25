import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { PipesModule } from '../pipes/pipes.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
