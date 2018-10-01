import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PunctuationsSelectorComponent } from './punctuations-selector/punctuations-selector.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [PunctuationsSelectorComponent]
})
export class PunctuationsModule { }
