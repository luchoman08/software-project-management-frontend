import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { SimpleUserStoryModule } from './simple-userstory/simple-userstory.module';
import { UserStoryRoutingModule } from './user-story-routing.module';

@NgModule({
  imports: [
      UserStoryRoutingModule
  ],
  declarations: [
  ],
  providers: [

  ]
})
export class UserStoryModule {}
