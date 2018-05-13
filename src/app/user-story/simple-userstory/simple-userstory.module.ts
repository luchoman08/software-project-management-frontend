import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SimpleUserStoryRoutingModule } from './simple-userstory-routing.module';
import { SimpleUserStoryDetailComponent } from './simple-userstory-detail/simple-userstory-detail.component';
import { SimpleUserStoryListComponent } from './simple-userstory-list/simple-userstory-list.component';
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
  ],
  providers: [
  ]
})
export class SimpleUserStoryModule {}
