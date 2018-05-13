import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { TaigaUserStoriesInterfaceService } from './service-interface';
import { TaigaUserStoriesService } from '../../project-managers/taiga/services';

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  providers: [
    TaigaUserStoriesService
  ]
})
export class TaigaInterfaceModule {}
