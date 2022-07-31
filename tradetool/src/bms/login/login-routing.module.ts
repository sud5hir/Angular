import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const MapRoutes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(MapRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
