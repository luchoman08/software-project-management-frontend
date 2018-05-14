import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ProjectManagersInterfaceService } from './services';

import {
  TaigaUserStoriesSimpleInterfaceService
} from './taiga-interface/service-interface';
import {
  TaigaUserStoriesService
} from '../../project-managers/taiga/services';
@NgModule({
  imports: [
  ],
  declarations: [
  ],
  providers: [
    TaigaUserStoriesSimpleInterfaceService,
    TaigaUserStoriesService,
    ProjectManagersInterfaceService
  ]
})
export class ProjectManagersInterfaceModule {}
