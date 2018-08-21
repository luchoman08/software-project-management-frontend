import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentComponent } from './assignment-build/assignment.component';

const routes: Routes = [
  {
    path: 'uniquecost',
    component: AssignmentComponent
  },
  {
    path: 'bypunctuation',
    component: AssignmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule {}
