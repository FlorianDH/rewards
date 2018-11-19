import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbAlertModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbAlertModule.forRoot(),
    NgbProgressbarModule.forRoot()
  ],
  exports: [
    NgbAlertModule,
    NgbProgressbarModule
  ],
  declarations: []
})
export class NgBootstrapModule {
}
