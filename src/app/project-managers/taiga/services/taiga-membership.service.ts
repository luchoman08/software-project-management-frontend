import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../../core/services';
import { TaigaMembership } from '../models';
import { map } from 'rxjs/operators/map';
import 'rxjs/add/operator/map'

@Injectable()
export class TaigaDevelopersService {
  constructor (
    private apiService: ApiService
  ) {}

  get(slug): Observable<TaigaMembership> {
    return this.apiService.get('/memberships/' + slug)
      .pipe(map(data => data));
  }
  getProjectMembership(project_id): Observable<TaigaMembership[]> {
    const params = new HttpParams().set('project', String(project_id));
    return this.apiService.get('/memberships',  params)
    .pipe(map(data => data));
  }
}
