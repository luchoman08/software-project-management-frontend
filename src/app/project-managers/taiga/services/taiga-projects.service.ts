import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TaigaProject } from '../models';
import { map } from 'rxjs/operators/map';
import { TaigaApiService } from './taiga-api.service';

@Injectable()
export class TaigaProjectsService {
  constructor (
    private apiService: TaigaApiService
  ) {}

  get(id): Observable<TaigaProject> {
    return this.apiService.get('/projects/' + id)
      .pipe(map(data => data));
  }

  /*
    Return all projects where a given member is part of there
  */
  getByMember(member_id): Observable<TaigaProject[]> {
    const params = new HttpParams().set('member', String(member_id));
    return this.apiService.get('/projects', params)
    .pipe(map(data => data));
  }
  getBySlug(slug): Observable<TaigaProject> {
    const params = new HttpParams().set('slug', String(slug));
    return this.apiService.get('/projects', params)
    .pipe(map(data => data));
  }
}
