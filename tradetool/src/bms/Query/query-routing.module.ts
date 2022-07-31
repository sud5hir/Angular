import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryComponent } from './query.component';

const MapRoutes: Routes = [
  { path: '', component: QueryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(MapRoutes)],
  exports: [RouterModule]
})
export class QueryRoutingModule { }
