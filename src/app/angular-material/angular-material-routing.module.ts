import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialComponent } from './angular-material.component';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { StateCrudComponent } from './state-crud/state-crud.component';
import { APIComponent } from './api/api.component';

const routes: Routes = [
  { path: '', component: AngularMaterialComponent,
  children:[
    {path:'', component:MainPageComponent},
    {path:'home', component:HomeComponent},
    {path:'main-page' , component:MainPageComponent},
    {path:'state-crud', component:StateCrudComponent},
    {path:'api',component:APIComponent}
    

  
  
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularMaterialRoutingModule { }
