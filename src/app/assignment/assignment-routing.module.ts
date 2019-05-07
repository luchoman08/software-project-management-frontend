import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentComponent } from './assignment-build/assignment.component';
import { AssignmentBuildPairsComponent } from './assignment-build-pairs/assignment-build-pairs.component';

const routes: Routes = [
  {
    path: 'uniquecost',
    component: AssignmentComponent
  },
  {
    path: 'bypunctuation',
    component: AssignmentComponent
  },
  {
    path: 'bygroups',
    component: AssignmentComponent
  },
  {
    path: 'bypairs',
    component: AssignmentBuildPairsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule {}
