import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { SimpleDeveloperDetailComponent } from './simple-developer-detail/simple-developer-detail.component';
import { SimpleDeveloperListComponent } from './simple-developer-list/simple-developer-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DeveloperDetailComponent, DeveloperListComponent, SimpleDeveloperDetailComponent, SimpleDeveloperListComponent]
})
export class DeveloperModule { }
