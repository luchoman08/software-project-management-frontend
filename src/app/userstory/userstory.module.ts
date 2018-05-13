import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { SimpleUserStoryModule } from './simple-userstory/simple-userstory.module';
import { UserStoryRoutingModule } from './userstory-routing.module';
import { ProjectManagersInterfaceService } from '../project-managers-interface/project-managers-interface.service';
import { TaigaInterfaceUserStories } from '../project-managers-interface/taiga-interface/lib/service-conversions';
import {
UserStoriesService,
} from '../project-managers-interface/services';
import { TaigaUserStoriesService } from '../project-managers/taiga/services';

@NgModule({
  imports: [
      UserStoryRoutingModule
  ],
  declarations: [
  ],
  providers: [
    UserStoriesService,
    ProjectManagersInterfaceService,
    TaigaInterfaceUserStories,
    TaigaUserStoriesService
  ]
})
export class UserStoryModule {}