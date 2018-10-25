import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors';

import {
    ApiService,
    JwtService,
    PageComponentsService,
} from './services';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FirstWordPipe } from './pipes/firstWord.pipe';
import { HttpProjectManagerInterceptor } from './interceptors/project-manager.interceptor';
import { ProjectManagersService } from './services/project-interface.service';
import { AssignedToPipe } from './pipes/assignedTo.pipe';

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
    AssignedToPipe,
    PageComponentsService,
  ],
  declarations: [CapitalizePipe, FirstWordPipe, AssignedToPipe],
  exports: [CapitalizePipe, FirstWordPipe, AssignedToPipe]
})
export class CoreModule { }
