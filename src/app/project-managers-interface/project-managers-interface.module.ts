import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import {
  UserStoriesService
} from '../project-managers-interface/services';
import { ProjectManagersInterfaceService } from './project-managers-interface.service';
import { TaigaInterfaceUserStories } from './taiga-interface/service-conversions';
@NgModule({
  imports: [
  ],
  declarations: [
      UserStoriesService,
      ProjectManagersInterfaceService,
      TaigaInterfaceUserStories
  ],
  providers: [
    ProjectManagersInterfaceService,
    TaigaInterfaceUserStories
  ]
})
export class UserStoryModule {}