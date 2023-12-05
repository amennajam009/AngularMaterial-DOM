import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularBootstrapComponent } from './angular-bootstrap.component';
import { HomeComponent } from './home/home.component';
import { TestingComComponent } from './testing-com/testing-com.component';
import { CRUDMainComponent } from './crud-main/crud-main.component';
import { CrudListingComponent } from './crud-listing/crud-listing.component';
import { StateCrudComponent } from './state-crud/state-crud.component';
import { DirectiveComponent } from './directive/directive.component';
import { ComponentDirectiveComponent } from './types-of-directives/component-directive/component-directive.component';
import { StructuralDirectiveComponent } from './types-of-directives/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './types-of-directive/attribute-directive/attribute-directive.component';


const routes: Routes = [{ path: '', component: AngularBootstrapComponent,
children:[
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'testing-com' , component:TestingComComponent},
  {path:'crud-main', component:CRUDMainComponent},
  {path:'crud-listing', component:CrudListingComponent},
  {path:'state-crud', component:StateCrudComponent},
  {path:'directive', component:DirectiveComponent},
  {path:'component-directive',component:ComponentDirectiveComponent},
  {path:'structural-directive',component:StructuralDirectiveComponent},
  // {path:'attribute-directive',component:AttributeDirectiveComponent},
  {path:'attribute-directive',component:AttributeDirectiveComponent}



] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularBootstrapRoutingModule { }
