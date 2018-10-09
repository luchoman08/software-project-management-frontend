import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { UserStoryRoutingModule } from './user-story-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserStoryDetailComponent } from './userstory-detail/userstory-detail.component';
import { UserStoryListComponent } from './userstory-list/userstory-list.component';
import { UserStoryListOneLineComponent } from './user-story-list-one-line/user-story-list-one-line.component';
import {
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatDialogModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule
} from '@angular/material';

import { NgDragDropModule } from 'ng-drag-drop';

import { UserStoryPointsComponent } from './user-story-points/user-story-points.component';
import { UserStoryGroupComponent } from './user-story-group/user-story-group.component';
import { UserStoryGroupsComponent } from './user-story-groups/user-story-groups.component';
@NgModule({
      imports: [
        UserStoryRoutingModule,
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatTooltipModule,
        NgDragDropModule.forRoot(),
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatButtonToggleModule,
    ],
    declarations: [
      UserStoryDetailComponent,
      UserStoryListComponent,
      UserStoryListOneLineComponent, 
      UserStoryPointsComponent, UserStoryGroupComponent, UserStoryGroupsComponent,
    ],
    exports: [
      UserStoryListOneLineComponent
    ],
    providers: [
    ]
})
export class UserStoryModule {}
