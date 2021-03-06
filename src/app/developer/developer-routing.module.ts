import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { SimpleDeveloperListOneLineComponent } from './developer-list-one-line/developer-list-one-line.component';
import { DeveloperPairComponent } from './developer-pair/developer-pair.component';
const routes: Routes = [
  {
    path: '',
    component: DeveloperPairComponent
  },
  {
    path: 'list',
    component:  DeveloperListComponent
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
export class DeveloperRoutingModule {}
