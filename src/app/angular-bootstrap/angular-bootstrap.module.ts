import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularBootstrapRoutingModule } from './angular-bootstrap-routing.module';
import { AngularBootstrapComponent } from './angular-bootstrap.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestingComComponent } from './testing-com/testing-com.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { CRUDMainComponent } from './crud-main/crud-main.component';
import { CrudListingComponent } from './crud-listing/crud-listing.component';

@NgModule({
  declarations: [
    AngularBootstrapComponent,
    HomeComponent,
    TestingComComponent,
    LayoutComponent,
    HeaderComponent,
    CRUDMainComponent,
    CrudListingComponent,
  ],
  imports: [
    CommonModule,
    AngularBootstrapRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AngularBootstrapModule { }
