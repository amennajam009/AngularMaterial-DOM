import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularBootstrapComponent } from './angular-bootstrap.component';

const routes: Routes = [{ path: '', component: AngularBootstrapComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularBootstrapRoutingModule { }
