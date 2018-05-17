import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../../core/services';
import { TaigaMilestone } from '../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class TaigaMilestonesService {
  constructor (
    private apiService: ApiService
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
