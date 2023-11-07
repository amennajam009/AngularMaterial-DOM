import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularBootstrapComponent } from './angular-bootstrap.component';
import { HomeComponent } from './home/home.component';
import { TestingComComponent } from './testing-com/testing-com.component';
import { CRUDMainComponent } from './crud-main/crud-main.component';
import { CrudListingComponent } from './crud-listing/crud-listing.component';

const routes: Routes = [{ path: '', component: AngularBootstrapComponent,
children:[
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'testing-com' , component:TestingComComponent},
  {path:'crud-main', component:CRUDMainComponent},
  {path:'crud-listing', component:CrudListingComponent},

  



] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularBootstrapRoutingModule { }
