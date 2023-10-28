import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularBootstrapComponent } from './angular-bootstrap.component';
import { HomeComponent } from './home/home.component';
import { TestingComComponent } from './testing-com/testing-com.component';

const routes: Routes = [{ path: '', component: AngularBootstrapComponent,
children:[
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'testing-com' , component:TestingComComponent}
  



] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularBootstrapRoutingModule { }
