import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatStepperModule,
  MatInputModule,
  MatExpansionModule,
  MatRippleModule,
  MatTooltipModule,
  MatDialogModule,
  MatDialog,
  MatIconModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOption,
  MatListModule,
  MatFormField
} from '@angular/material';


@NgModule({
  imports: [

    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatStepperModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatProgressBarModule,
    MatRippleModule,
    MatFormFieldModule,
    MatListModule,

  ],
  exports: [

    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatStepperModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatProgressBarModule,
    MatRippleModule,
    MatFormFieldModule,
    MatListModule,

  ],
})
export class MaterialModule { }
