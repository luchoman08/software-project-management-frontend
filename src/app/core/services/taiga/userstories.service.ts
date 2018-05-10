import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api.service';
import { UserStory } from '../../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class UserStoryService {
  constructor (
    private apiService: ApiService
  ) {}

  get(slug): Observable<UserStory> {
    return this.apiService.get('/userstories/' + slug)
      .pipe(map(data => data));
  }
}
