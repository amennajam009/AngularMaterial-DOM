import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialRoutingModule } from './angular-material-routing.module';
import { AngularMaterialComponent } from './angular-material.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AngularMaterialComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AngularMaterialModule { }
