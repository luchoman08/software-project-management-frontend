import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors';

import {
    ApiService,
    JwtService,
} from './services';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    JwtService
  ],
  declarations: [CapitalizePipe],
  exports: [CapitalizePipe]
})
export class CoreModule { }
