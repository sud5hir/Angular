import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaComponent } from './pizza.component';

const MapRoutes: Routes = [
  { path: '', component: PizzaComponent }
];


@NgModule({
  imports: [RouterModule.forChild(MapRoutes)],
  exports: [RouterModule]
})
export class PizzaRoutingModule { }
