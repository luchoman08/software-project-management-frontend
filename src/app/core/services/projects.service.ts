import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SimpleProject } from '../models';
import { ApiService } from './api.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators/map';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ProjectsService {
  constructor (
    private apiService: ApiService
  ) {}

  get(id): Observable<SimpleProject> {
    return this.apiService.get('/projects/' + id)
      .pipe(map(data => data));
  }

  /*
    Return all projects where a given member is part of there
  */
  getByMemberId(member_id): Observable<SimpleProject[]> {
    const params = new HttpParams().set('member', String(member_id));
    return this.apiService.get('/projects', params)
    .pipe(map(data => data));
  }
  getBySlug(slug): Observable<SimpleProject> {
    const params = new HttpParams().set('slug', String(slug));
    return this.apiService.get('/projects', params)
    .pipe(map(data => data));
  }
}

