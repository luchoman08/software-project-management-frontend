import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../../core/services';
import { Project } from '../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class ProjectsService {
  constructor (
    private apiService: ApiService
  ) {}

  get(slug): Observable<Project> {
    return this.apiService.get('/projects/' + slug)
      .pipe(map(data => data));
  }

}
