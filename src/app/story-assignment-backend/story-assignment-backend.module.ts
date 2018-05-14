import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleUserStoryModule } from '../user-story/simple-userstory/simple-userstory.module';

@NgModule({
  imports: [
    CommonModule,
    SimpleUserStoryModule
  ],
  declarations: []
})
export class StoryAssignmentBackendModule { }
