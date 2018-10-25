import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PunctuationsSelectorComponent } from './punctuations/punctuations-selector/punctuations-selector.component';
import { DeveloperPairComponent } from './developer/developer-pair/developer-pair.component';
const routes: Routes = [
  {
    path: 'punctuations',
    component: PunctuationsSelectorComponent
  },
  {
    path: 'pairs',
    component: DeveloperPairComponent
  },
  /*  End of dev route */
  {
    path: 'assignment',
    loadChildren: './assignment/assignment.module#AssignmentModule'
  },
  {
    path: 'userstories',
    loadChildren: './user-story/user-story.module#UserStoryModule'
  },
  {
    path: 'developers',
    loadChildren: './developer/developer.module#DeveloperModule'
  },
  {
    path: '',
    loadChildren: './pages/pages.module#PagesModule'
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

  /*
    imports: [
      CommonModule,
      BrowserModule,
      RouterModule.forRoot(routes)
    ],
    exports: [
    ],*/
})
export class AppRoutingModule {}
