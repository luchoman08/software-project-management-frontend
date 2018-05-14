import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ProjectManagersInterfaceService } from './services';

import {
  TaigaUserStoriesSimpleInterfaceService,
  TaigaMilestonesSimpleServiceInterface,
  TaigaMembershipsSimpleServiceInterface,
  TaigaProjectsSimpleInterfaceService
} from './taiga-interface/service-interface';
import {
  TaigaUserStoriesService,
  TaigaMilestonesService,
  TaigaProjectsService,
  TaigaMembershipsService
} from '../../project-managers/taiga/services';
@NgModule({
  imports: [
  ],
  declarations: [
  ],
  providers: [
    TaigaUserStoriesSimpleInterfaceService,
    TaigaProjectsSimpleInterfaceService,
    TaigaMilestonesSimpleServiceInterface,
    TaigaMembershipsSimpleServiceInterface,
    TaigaUserStoriesService,
    TaigaProjectsService,
    TaigaMilestonesService,
    TaigaMembershipsService,
    ProjectManagersInterfaceService
  ]
})
export class ProjectManagersInterfaceModule {}
