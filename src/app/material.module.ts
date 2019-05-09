import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatStepperModule,
  MatInputModule,
  MatExpansionModule,
  MatCardModule,
  MatRippleModule,
  MatTooltipModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatIconModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatSliderModule,
  MatSidenavModule,
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
    MatToolbarModule,
    MatSliderModule,
    MatSidenavModule,
    MatTooltipModule,
    MatDialogModule,
    MatMenuModule,
    MatOptionModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule

  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatToolbarModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSliderModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    MatOptionModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,

  ],
})
export class MaterialModule { }
