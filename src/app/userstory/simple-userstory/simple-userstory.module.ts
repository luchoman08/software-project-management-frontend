import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SimpleUserStoryRoutingModule } from './simple-userstory-routing.module';
import { SimpleUserStoryDetailComponent } from './';
import { SimpleUserStoryListComponent } from './simple-userstory-list/simple-userstory-list.component';
import { SimpleStoryEditPointsComponent } from './simple-story-edit-points/simple-story-edit-points.component';

import {
  MatFormFieldModule,
  MatFormField,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatButtonToggleModule 
} from '@angular/material';

@NgModule({
  imports: [
      SimpleUserStoryRoutingModule,
      CommonModule,
      FormsModule,
      MatFormFieldModule,
      MatDialogModule,
      MatInputModule,
      MatButtonModule,
      MatButtonToggleModule,
  ],
  declarations: [
    SimpleUserStoryDetailComponent,
    SimpleUserStoryListComponent,
    SimpleStoryEditPointsComponent
  ],
  entryComponents: [
    SimpleStoryEditPointsComponent
  ],
  providers: [
  ]
})
export class SimpleUserStoryModule {}
