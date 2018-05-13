import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleUserStoryDetailComponent } from './';
import { SimpleUserStoryListComponent } from './';
const routes: Routes = [
  {
    path: '',
    component: SimpleUserStoryDetailComponent
  },
  {
    path: 'list',
    component:  SimpleUserStoryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleUserStoryRoutingModule {}