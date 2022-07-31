import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortModuleRoutingModule } from './sort-module-routing.module';
import { SortModuleComponent } from './sort-module.component';


@NgModule({
  declarations: [
    SortModuleComponent
  ],
  imports: [
    CommonModule,
    SortModuleRoutingModule
  ]
})
export class SortModuleModule { }
