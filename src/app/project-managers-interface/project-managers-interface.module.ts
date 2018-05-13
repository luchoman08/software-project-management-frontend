import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ProjectManagersInterfaceService } from './services';

import {
  TaigaUserStoriesInterfaceService
} from './taiga-interface/service-interface';
import {
  TaigaUserStoriesService
} from '../project-managers/taiga/services';
@NgModule({
  imports: [
  ],
  declarations: [
  ],
  providers: [
    TaigaUserStoriesInterfaceService,
    TaigaUserStoriesService,
    ProjectManagersInterfaceService
  ]
})
export class ProjectManagersInterfaceModule {}
