import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../../core/services';
import { TaigaProject } from '../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class TaigaProjectsService {
  constructor (
    private apiService: ApiService
  ) {}

  get(slug): Observable<TaigaProject> {
    return this.apiService.get('/projects/' + slug)
      .pipe(map(data => data));
  }

}
