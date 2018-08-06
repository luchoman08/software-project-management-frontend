import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleDataDialogEditOrAddComponent } from './';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { MaterialModule } from '../../material.module';
@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    SingleDataDialogEditOrAddComponent
  ],
  entryComponents: [
    SingleDataDialogEditOrAddComponent
  ]
})
export class CommonComponentsModule { }
