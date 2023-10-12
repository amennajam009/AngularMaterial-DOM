import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularBootstrapRoutingModule } from './angular-bootstrap-routing.module';
import { AngularBootstrapComponent } from './angular-bootstrap.component';


@NgModule({
  declarations: [
    AngularBootstrapComponent
  ],
  imports: [
    CommonModule,
    AngularBootstrapRoutingModule
  ]
})
export class AngularBootstrapModule { }
