import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';
import { DeveloperListComponent } from './developer-list/developer-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DeveloperDetailComponent, DeveloperListComponent]
})
export class DeveloperModule { }
