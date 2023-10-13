import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularBootstrapComponent } from './angular-bootstrap.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: AngularBootstrapComponent,
children:[
  {path:'', component:HomeComponent},
  



] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularBootstrapRoutingModule { }
