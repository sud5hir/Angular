import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountermoduleComponent } from './countermodule.component';

const routes: Routes = [{ path: '', component: CountermoduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountermoduleRoutingModule { }
