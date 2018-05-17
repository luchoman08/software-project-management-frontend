import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleDeveloperListComponent } from './simple-developer-list/simple-developer-list.component';
import { SimpleDeveloperDetailComponent } from './simple-developer-detail/simple-developer-detail.component';
import { SimpleDeveloperRoutingModule } from './simple-developer-routing.module';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatTooltipModule
} from '@angular/material';
import { SimpleDeveloperListOneLineComponent } from './simple-developer-list-one-line/simple-developer-list-one-line.component';
@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    SimpleDeveloperRoutingModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  declarations: [
    SimpleDeveloperListComponent,
    SimpleDeveloperDetailComponent,
    SimpleDeveloperListOneLineComponent
  ],
  exports: [
    SimpleDeveloperListOneLineComponent
  ],
})
export class SimpleDeveloperModule { }
