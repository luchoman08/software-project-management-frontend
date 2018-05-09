import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SimpleUserStoryRoutingModule } from './simple-userstory-routing.module';
import { SimpleUserStoryDetailComponent } from './';

@NgModule({
  imports: [
      SimpleUserStoryRoutingModule
  ],
  declarations: [
    SimpleUserStoryDetailComponent
  ],
  providers: [
  ]
})
export class SimpleUserStoryModule {}