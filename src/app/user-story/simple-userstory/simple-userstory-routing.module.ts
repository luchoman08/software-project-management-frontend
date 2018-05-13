import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleUserStoryDetailComponent } from './simple-userstory-detail/simple-userstory-detail.component';
import { SimpleUserStoryListComponent } from './simple-userstory-list/simple-userstory-list.component';
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