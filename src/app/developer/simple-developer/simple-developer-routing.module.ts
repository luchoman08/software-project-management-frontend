import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleDeveloperDetailComponent } from './simple-developer-detail/simple-developer-detail.component';
import { SimpleDeveloperListComponent } from './simple-developer-list/simple-developer-list.component';
import { SimpleDeveloperListOneLineComponent } from './simple-developer-list-one-line/simple-developer-list-one-line.component';
const routes: Routes = [
  {
    path: '',
    component: SimpleDeveloperDetailComponent
  },
  {
    path: 'list',
    component:  SimpleDeveloperListComponent
  },
  {
    path: 'listoneline',
    component:  SimpleDeveloperListOneLineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleDeveloperRoutingModule {}