import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'


import { ProjectManagersInterfaceService } from './project-managers-interface.service';
import { TaigaInterfaceUserStories } from './taiga-interface/service-conversions';
@NgModule({
  imports: [
  ],
  declarations: [
  ],
  providers: [
    ProjectManagersInterfaceService,
    TaigaInterfaceUserStories
  ]
})
export class ProjectManagersInterfaceModule {}
