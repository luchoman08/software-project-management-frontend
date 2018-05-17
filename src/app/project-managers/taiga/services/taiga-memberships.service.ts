import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TaigaMembership } from '../models';
import { map } from 'rxjs/operators/map';
import 'rxjs/add/operator/map'
import { TaigaApiService } from './taiga-api.service';

@Injectable()
export class TaigaMembershipsService {
  constructor (
    private apiService: TaigaApiService
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
