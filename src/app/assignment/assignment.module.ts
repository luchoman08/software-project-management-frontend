import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentRoutingModule } from './assignment-routing.module';


import { AssignmentComponent } from './assignment-build/assignment.component';
import { AssignmentDetailReadOnlyComponent } from './assignment-detail-read-only/assignment-detail-read-only.component';
import { UserStoryModule } from '../user-story/user-story.module';
import { DeveloperModule } from '../developer/developer.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';




@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    AssignmentRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DeveloperModule,
    UserStoryModule
  ],
  declarations: [
    AssignmentComponent,
    AssignmentDetailReadOnlyComponent

  ],
  exports: [
    AssignmentComponent
  ],
})
export class AssignmentModule { }
