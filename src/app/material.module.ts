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
  MatIconModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatListModule,
} from '@angular/material';


@NgModule({
  imports: [

    MatButtonModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatInputModule,
    MatExpansionModule,
    MatRippleModule,
    MatTooltipModule,
    MatDialogModule,
    MatOptionModule,
    MatIconModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule

  ],
  exports: [

    MatButtonModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatInputModule,
    MatExpansionModule,
    MatRippleModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    MatOptionModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,

  ],
})
export class MaterialModule { }
