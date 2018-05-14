import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ProjectManagersInterfaceService } from './services';

import {
  TaigaUserStoriesSimpleInterfaceService
} from './taiga-interface/service-interface';
import {
  TaigaUserStoriesService
} from '../../project-managers/taiga/services';
import { TaigaProjectsService } from '../taiga/services/taiga-projects.service';

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  providers: [
    TaigaUserStoriesSimpleInterfaceService,
    TaigaUserStoriesService,
    TaigaProjectsService,
    ProjectManagersInterfaceService
  ]
})
export class ProjectManagersInterfaceModule {}
