import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

import {
  CapitalizePipe,
  FirstWordPipe,
  AssignedToPipe,
  AssignedToPairPipe
} from './pipes';

import { MaterialModule } from '../material.module';

import {
  SingleDataDialogEditOrAddComponent,
  PercentageProgressBarComponent
} from './components';

import {
  FooterComponent,
  NavbarComponent,
  SidenavLinksComponent
} from './layout';


@NgModule({
  declarations: [
    CapitalizePipe,
    FirstWordPipe,
    AssignedToPipe,
    AssignedToPairPipe,

    SingleDataDialogEditOrAddComponent,
    PercentageProgressBarComponent,

    FooterComponent,
    NavbarComponent,
    SidenavLinksComponent
],
  exports: [
    CapitalizePipe,
    FirstWordPipe,
    AssignedToPipe,
    AssignedToPairPipe,

    PercentageProgressBarComponent,
    FlexLayoutModule,
    MaterialModule,
    FooterComponent,
    NavbarComponent,
    SidenavLinksComponent
  ],
  providers: [
    AssignedToPipe,
    AssignedToPairPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  entryComponents: [
    SingleDataDialogEditOrAddComponent
  ]
})
export class SharedModule { }
