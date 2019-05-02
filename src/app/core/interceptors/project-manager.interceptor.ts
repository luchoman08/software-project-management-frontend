import { Injectable, Injector } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpParams
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { ProjectManagersService } from '../services';

@Injectable()
export class HttpProjectManagerInterceptor implements HttpInterceptor {
  constructor(private projectManagersService: ProjectManagersService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const choosenProjectManager = this.projectManagersService.chosenProjectManager;
    const params = {
        'project_manager':  String(choosenProjectManager)
    };
    const request = req.clone({setParams : params});
    return next.handle(request);
  }
}
