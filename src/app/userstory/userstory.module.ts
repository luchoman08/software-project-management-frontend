import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { SimpleUserStoryModule } from './simple-userstory/simple-userstory.module';
import { UserStoryRoutingModule } from './userstory-routing.module';

import {
PointsService,
ProjectsService,
UserStoriesService,
RolesService
} from '../project-managers/taiga';

@NgModule({
  imports: [
      UserStoryRoutingModule
  ],
  declarations: [
  ],
  providers: [
    PointsService,
    ProjectsService,
    UserStoriesService,
    RolesService,
  ]
})
export class UserStoryModule {}