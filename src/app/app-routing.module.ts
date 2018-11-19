import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: loginComponent
  // },
  // {
  //   path: 'rewards',
  //   component: rewardComponent
  // },
  // {
  //   path: 'achievements',
  //   component: achievementComponent
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
