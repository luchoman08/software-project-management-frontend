import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../../core/services';
import { TaigaUserStory } from '../models';
import { map } from 'rxjs/operators/map';
import 'rxjs/add/operator/map'

@Injectable()
export class TaigaUserStoriesService {
  constructor (
    private apiService: ApiService
  ) {}

  get(slug): Observable<TaigaUserStory> {
    return this.apiService.get('/userstories/' + slug)
      .pipe(map(data => data));
  }
  getProjectStories(project_id): Observable<TaigaUserStory[]> {
    const params = new HttpParams().set('project', String(project_id));
    return this.apiService.get('/userstories',  params)
    .pipe(map(data => data));
  }
}
