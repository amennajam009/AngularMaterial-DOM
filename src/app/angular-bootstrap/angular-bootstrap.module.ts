import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularBootstrapRoutingModule } from './angular-bootstrap-routing.module';
import { AngularBootstrapComponent } from './angular-bootstrap.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AngularBootstrapComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AngularBootstrapRoutingModule
  ]
})
export class AngularBootstrapModule { }
