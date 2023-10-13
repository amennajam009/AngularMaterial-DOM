import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialComponent } from './angular-material.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: AngularMaterialComponent,
  children:[
    {path:'' , component:HomeComponent},

  
  
  ] }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularMaterialRoutingModule { }
