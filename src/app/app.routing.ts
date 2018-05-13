import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },    {
    path: 'userstories',
    loadChildren: './user-story/user-story.module#UserStoryModule'
    },
    {
      path: 'developers',
      loadChildren: './developer/developer.module#DeveloperModule'
    },
    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({

    imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules
  })],
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




export class AppRoutingModule { }
