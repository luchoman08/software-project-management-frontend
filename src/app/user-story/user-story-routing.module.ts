import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'simplestory',
    loadChildren: './simple-userstory/simple-userstory.module#SimpleUserStoryModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserStoryRoutingModule {}