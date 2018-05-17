import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { TaigaUserStoriesService } from '../../../project-managers/taiga/services';
import { TaigaProjectsService } from '../../taiga/services/taiga-projects.service';

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  providers: [
    TaigaUserStoriesService,
    TaigaProjectsService
  ]
})
export class TaigaInterfaceModule {}
