import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryRoutingModule } from './query-routing.module';
import { QueryComponent } from './query.component';
import { FormmoduleComponent } from './FormModule/formmodule.component';


@NgModule({
  declarations: [QueryComponent, FormmoduleComponent],
  imports: [
    CommonModule,
    QueryRoutingModule
  ]
})
export class QueryModule { }
