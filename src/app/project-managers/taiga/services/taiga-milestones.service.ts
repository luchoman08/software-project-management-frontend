import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TaigaMilestone } from '../models';
import { map } from 'rxjs/operators/map';
import { TaigaApiService } from './taiga-api.service';

@Injectable()
export class TaigaMilestonesService {
  constructor (
    private apiService: TaigaApiService
  ) {}

  get(slug): Observable<TaigaMilestone> {
    return this.apiService.get('/milestones/' + slug)
      .pipe(map(data => data));
  }
  getProjectMilestones(project_id): Observable<TaigaMilestone[]> {
    const params = new HttpParams().set('project', String(project_id));
    return this.apiService.get('/milestones',  params)
    .pipe(map(data => data));
  }
}
