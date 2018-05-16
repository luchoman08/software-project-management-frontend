import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleUserStoryDetailComponent } from './simple-userstory-detail/simple-userstory-detail.component';
import { SimpleUserStoryListComponent } from './simple-userstory-list/simple-userstory-list.component';
import { SimpleUserStoryListOneLineComponent } from './simple-user-story-list-one-line/simple-user-story-list-one-line.component';
const routes: Routes = [
  {
    path: '',
    component: SimpleUserStoryDetailComponent
  },
  {
    path: 'list',
    component:  SimpleUserStoryListComponent
  },
  {
    path: 'listoneline',
    component:  SimpleUserStoryListOneLineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleUserStoryRoutingModule {}