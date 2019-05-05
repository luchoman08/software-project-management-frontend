import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PunctuationsSelectorComponent } from './punctuations/punctuations-selector/punctuations-selector.component';
import { AssignmentDetailPairComponent } from './assignment/assignment-detail-pair/assignment-detail-pair.component';
const routes: Routes = [
  {
    path: 'punctuations',
    component: PunctuationsSelectorComponent
  },
  {
    path: 'pairs',
    component: AssignmentDetailPairComponent
  },
  /*  End of dev route */
  {
    path: 'assignment',
    loadChildren: () => import('./assignment/assignment.module').then(m => m.AssignmentModule)
  },
  {
    path: 'userstories',
    loadChildren: () => import('./user-story/user-story.module').then(m => m.UserStoryModule)
  },
  {
    path: 'developers',
    loadChildren: () => import('./developer/developer.module').then(m => m.DeveloperModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preload all modules; optionally we could
      // implement a custom preloading strategy for just some
      // of the modules (PRs welcome 😉)
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
