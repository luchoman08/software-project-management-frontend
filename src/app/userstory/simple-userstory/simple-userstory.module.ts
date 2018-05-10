import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  

import { SimpleUserStoryRoutingModule } from './simple-userstory-routing.module';
import { SimpleUserStoryDetailComponent } from './';

@NgModule({
  imports: [
      SimpleUserStoryRoutingModule,
      CommonModule
  ],
  declarations: [
    SimpleUserStoryDetailComponent
  ],
  providers: [
  ]
})
export class SimpleUserStoryModule {}