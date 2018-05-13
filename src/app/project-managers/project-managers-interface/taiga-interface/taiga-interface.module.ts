import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { TaigaUserStoriesService } from '../../../project-managers/taiga/services';

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
