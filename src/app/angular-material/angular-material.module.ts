import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialRoutingModule } from './angular-material-routing.module';
import { AngularMaterialComponent } from './angular-material.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {MatTabsModule} from '@angular/material/tabs';
import { Form1Component } from './mat-tab-forms/form1/form1.component';
import { Form2Component } from './mat-tab-forms/form2/form2.component';
import { Form3Component } from './mat-tab-forms/form3/form3.component';
import { Form4Component } from './mat-tab-forms/form4/form4.component';
import { Form5Component } from './mat-tab-forms/form5/form5.component';
import {MatSelectModule} from '@angular/material/select';
import { LayoutComponent } from './layout/layout.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { MainPageComponent } from './main-page/main-page.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { StateCrudComponent } from './state-crud/state-crud.component'
@NgModule({
  declarations: [
    AngularMaterialComponent,
    HomeComponent,
    HeaderComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component,
    LayoutComponent,
    MainPageComponent,
    StateCrudComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatSelectModule,
    NgxSpinnerModule,
    NgSelectModule,
  ]
})
export class AngularMaterialModule { }
