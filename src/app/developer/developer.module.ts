import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperRoutingModule } from './developer-routing.module';


import { DeveloperListComponent } from './developer-list/developer-list.component';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatTooltipModule
} from '@angular/material';
import { SimpleDeveloperListOneLineComponent } from './developer-list-one-line/developer-list-one-line.component';
import { DeveloperSelectDialogComponent } from './developer-select-dialog/developer-select-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    DeveloperRoutingModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  declarations: [
    DeveloperListComponent,
    DeveloperDetailComponent,
    SimpleDeveloperListOneLineComponent,
    DeveloperSelectDialogComponent
  ],
  exports: [
    SimpleDeveloperListOneLineComponent
  ],
})
export class DeveloperModule { }
