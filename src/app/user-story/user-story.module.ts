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
  MatButtonToggleModule
} from '@angular/material';
import { UserStoryPointsComponent } from './user-story-points/user-story-points.component';
@NgModule({
      imports: [
        UserStoryRoutingModule,
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        MatButtonToggleModule,
    ],
    declarations: [
      UserStoryDetailComponent,
      UserStoryListComponent,
      UserStoryListOneLineComponent, 
      UserStoryPointsComponent,
    ],
    exports: [
      UserStoryListOneLineComponent
    ],
    providers: [
    ]
})
export class UserStoryModule {}
