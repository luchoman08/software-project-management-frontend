import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleUserStoryDetailComponent } from './simple-userstory-detail/simple-userstory-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SimpleUserStoryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleUserStoryRoutingModule {}