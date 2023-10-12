import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'AngularMaterial', loadChildren: () => import('./angular-material/angular-material.module').then(m => m.AngularMaterialModule) }, { path: 'Angular-bootstrap', loadChildren: () => import('./angular-bootstrap/angular-bootstrap.module').then(m => m.AngularBootstrapModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
