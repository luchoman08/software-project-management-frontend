import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  

import { SimpleUserStoryRoutingModule } from './simple-userstory-routing.module';
import { SimpleUserStoryDetailComponent } from './';
import { SimpleUserStoryListComponent } from './simple-userstory-list/simple-userstory-list.component';

@NgModule({
  imports: [
      SimpleUserStoryRoutingModule,
      CommonModule
  ],
  declarations: [
    SimpleUserStoryDetailComponent,
    SimpleUserStoryListComponent
  ],
  providers: [
  ]
})
export class SimpleUserStoryModule {}