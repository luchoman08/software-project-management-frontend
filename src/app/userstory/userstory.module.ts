import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { SimpleUserStoryModule } from './simple-userstory/simple-userstory.module';
import { UserStoryRoutingModule } from './userstory-routing.module';
@NgModule({
  imports: [
      SimpleUserStoryModule,
      UserStoryRoutingModule
  ],
  declarations: [
  ],
  providers: [
  ]
})
export class UserStoryModule {}