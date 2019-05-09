import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { UserStoryRoutingModule } from './user-story-routing.module';
import { FormsModule, } from '@angular/forms';

import { UserStoryDetailComponent } from './userstory-detail/userstory-detail.component';
import { UserStoryListComponent } from './userstory-list/userstory-list.component';
import { UserStoryListOneLineComponent } from './user-story-list-one-line/user-story-list-one-line.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { UserStoryPointsComponent } from './user-story-points/user-story-points.component';
import { UserStoryGroupComponent } from './user-story-group/user-story-group.component';
import { UserStoryGroupsComponent } from './user-story-groups/user-story-groups.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
      imports: [
        UserStoryRoutingModule,
        CommonModule,
        FormsModule,
        SharedModule,
        DragDropModule,
    ],
    declarations: [
      UserStoryDetailComponent,
      UserStoryListComponent,
      UserStoryListOneLineComponent,
      UserStoryPointsComponent, UserStoryGroupComponent, UserStoryGroupsComponent,
    ],
    exports: [
      UserStoryListOneLineComponent,
      UserStoryGroupComponent
    ],
    providers: [
    ]
})
export class UserStoryModule {}
