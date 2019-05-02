import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperRoutingModule } from './developer-routing.module';


import { DeveloperListComponent } from './developer-list/developer-list.component';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SimpleDeveloperListOneLineComponent } from './developer-list-one-line/developer-list-one-line.component';
import { DeveloperSelectDialogComponent } from './developer-select-dialog/developer-select-dialog.component';
import { MaterialModule } from '../material.module';
import { DeveloperPunctuationsComponent } from './developer-punctuations/developer-punctuations.component';

import {
  DeveloperCompatibilityWithUserStoryComponent
} from './developer-compatibility-with-user-story/developer-compatibility-with-user-story.component';

import { CommonComponentsModule } from '../page-components/common-components/common-components.module';
import { DeveloperPairComponent } from './developer-pair/developer-pair.component';
import { NgDragDropModule } from 'ng-drag-drop';


@NgModule({
  imports: [
    CommonModule,
    NgDragDropModule.forRoot(),
    CommonComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    DeveloperRoutingModule,
    MaterialModule,

  ],
  declarations: [
    DeveloperListComponent,
    DeveloperDetailComponent,
    SimpleDeveloperListOneLineComponent,
    DeveloperSelectDialogComponent,
    DeveloperPunctuationsComponent,
    DeveloperCompatibilityWithUserStoryComponent,
    DeveloperPairComponent
  ],
  exports: [
    SimpleDeveloperListOneLineComponent,
    DeveloperSelectDialogComponent,
    DeveloperCompatibilityWithUserStoryComponent,
    DeveloperPairComponent
  ],
  entryComponents: [
    DeveloperSelectDialogComponent
  ]
})
export class DeveloperModule { }
