import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors';

import {
    ApiService,
    JwtService,
    PageComponentsService,
    LoadingBarService,
} from './services';

import { HttpProjectManagerInterceptor } from './interceptors/project-manager.interceptor';
import { ProjectManagersService } from './services/project-interface.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpProjectManagerInterceptor, multi: true},
    ApiService,
    JwtService,
    ProjectManagersService,
    LoadingBarService,
    PageComponentsService,
  ],
})
export class CoreModule { }
