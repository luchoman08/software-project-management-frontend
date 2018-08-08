import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleDataDialogEditOrAddComponent } from './';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { MaterialModule } from '../../material.module';
import { PercentageProgressBarComponent } from './percentage-progress-bar/percentage-progress-bar.component';
@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    SingleDataDialogEditOrAddComponent,
    PercentageProgressBarComponent
  ],
  exports: [
    PercentageProgressBarComponent
  ],
  entryComponents: [
    SingleDataDialogEditOrAddComponent
  ]
})
export class CommonComponentsModule { }
