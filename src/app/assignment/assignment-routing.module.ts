import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentComponent } from './assignment-build/assignment.component';
import { AssignmentDetailReadOnlyComponent } from './assignment-detail-read-only/assignment-detail-read-only.component';

const routes: Routes = [
  {
    path: '',
    component: AssignmentComponent
  },
  {
    path: 'readonly',
    component: AssignmentDetailReadOnlyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule {}
