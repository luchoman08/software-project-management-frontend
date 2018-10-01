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
  MatProgressSpinnerModule,
  MatIconModule,
  MatProgressBarModule,
  MatSliderModule,
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
    MatSliderModule,
    MatTooltipModule,
    MatDialogModule,
    MatOptionModule,
    MatIconModule,
    MatProgressSpinnerModule,
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
    MatProgressSpinnerModule,
    MatSliderModule,
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
