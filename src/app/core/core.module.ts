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
import { AssignedToPairPipe } from './pipes/assigned-to-pair.pipe';

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
    AssignedToPairPipe,
    PageComponentsService,
  ],
  declarations: [CapitalizePipe, FirstWordPipe, AssignedToPipe, AssignedToPairPipe],
  exports: [CapitalizePipe, FirstWordPipe, AssignedToPipe, AssignedToPairPipe]
})
export class CoreModule { }
