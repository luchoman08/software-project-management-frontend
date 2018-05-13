import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleDeveloperListComponent } from './simple-developer-list/simple-developer-list.component';
import { SimpleDeveloperDetailComponent } from './simple-developer-detail/simple-developer-detail.component';
import { SimpleDeveloperRoutingModule } from './simple-developer-routing.module';
@NgModule({
  imports: [
    CommonModule,
    SimpleDeveloperRoutingModule
  ],
  declarations: [
    SimpleDeveloperListComponent,
    SimpleDeveloperDetailComponent
  ]
})
export class SimpleDeveloperModule { }
