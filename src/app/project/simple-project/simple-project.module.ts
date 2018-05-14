import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleProjectRoutingModule } from './simple-project-routing.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  imports: [
    CommonModule,
    SimpleProjectRoutingModule
  ],
  declarations: [ProjectDetailComponent, ProjectListComponent]
})
export class SimpleProjectModule { }
