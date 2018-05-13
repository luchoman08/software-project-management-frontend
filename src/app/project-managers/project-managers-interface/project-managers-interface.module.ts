import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ProjectManagersInterfaceService } from './services';

import {
  TaigaSimpleUserStoriesInterfaceService
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
    TaigaSimpleUserStoriesInterfaceService,
    TaigaUserStoriesService,
    ProjectManagersInterfaceService
  ]
})
export class ProjectManagersInterfaceModule {}
