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
import { StateCrudComponent } from './state-crud/state-crud.component';
import { ChangeColorElDirective } from './shared/change-color-el.directive';
import { DirectiveDirective } from './shared/directives/directive.directive';
import { DirectiveComponent } from './directive/directive.component';
import { ComponentDirectiveComponent } from './types-of-directives/component-directive/component-directive.component';
import { StructuralDirectiveComponent } from './types-of-directives/structural-directive/structural-directive.component';




@NgModule({
  declarations: [
    AngularBootstrapComponent,
    HomeComponent,
    TestingComComponent,
    LayoutComponent,
    HeaderComponent,
    CRUDMainComponent,
    CrudListingComponent,
    StateCrudComponent,
    ChangeColorElDirective,
    DirectiveDirective,
    DirectiveComponent,
    ComponentDirectiveComponent,
    StructuralDirectiveComponent,


  ],
  imports: [
    CommonModule,
    AngularBootstrapRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AngularBootstrapModule { }
