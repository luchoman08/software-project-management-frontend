import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserStoryDetailComponent } from './userstory-detail/userstory-detail.component';
import { UserStoryListComponent } from './userstory-list/userstory-list.component';
import { UserStoryListOneLineComponent } from './user-story-list-one-line/user-story-list-one-line.component';
import { UserStoryGroupComponent } from './user-story-group/user-story-group.component';

const routes: Routes = [
  {
    path: '',
    component: UserStoryGroupComponent
  },
  {
    path: 'list',
    component:  UserStoryListComponent
  },
  {
    path: 'listoneline',
    component:  UserStoryListOneLineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserStoryRoutingModule {}
