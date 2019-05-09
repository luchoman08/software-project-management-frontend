import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AssignmentRoutingModule } from './assignment-routing.module';

import { AssignmentComponent } from './assignment-build/assignment.component';
import { AssignmentDetailReadOnlyComponent } from './assignment-detail-read-only/assignment-detail-read-only.component';
import { UserStoryModule } from '../user-story/user-story.module';
import { DeveloperModule } from '../developer/developer.module';
import { MaterialModule } from '../material.module';
import { PairAssignmentComponent } from './pair-assignment/pair-assignment.component';
import { AssignmentBuildPairsComponent } from './assignment-build-pairs/assignment-build-pairs.component';
import { AssignmentDetailPairComponent } from './assignment-detail-pair/assignment-detail-pair.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AssignmentRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    DeveloperModule,
    UserStoryModule
  ],
  declarations: [
    AssignmentComponent,
    AssignmentDetailReadOnlyComponent,
    PairAssignmentComponent,
    AssignmentBuildPairsComponent,
    AssignmentDetailPairComponent

  ],
  exports: [
    AssignmentComponent,
    AssignmentDetailPairComponent
  ],
})
export class AssignmentModule { }
