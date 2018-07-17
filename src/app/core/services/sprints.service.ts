import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { Sprint } from '../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class SprintsService {

  constructor ( private apiService: ApiService) {  }

  get(slug): Observable<Sprint> {
    return this.apiService.get('/sprints/' + slug);
  }
  getProjectSprints(project_id): Observable<Sprint[]> {
    const params = new HttpParams().set('project', String(project_id));
    return this.apiService.get('/sprints', params);
      }
    }
