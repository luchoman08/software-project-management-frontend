import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { UserStory } from '../models';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';
import { forkJoin } from 'rxjs/observable/forkJoin';
@Injectable()
export class UserStoriesService {

  constructor ( private apiService: ApiService) {  }

  get(slug): Observable<UserStory> {
    return this.apiService.get('/userstories/' + slug)
    .pipe(map(data => data));
  }
  set( slug: string | number, userStory: UserStory ): Observable<UserStory> {
    return this.apiService.patch('/userstories/' + String(slug), userStory ).pipe(tap(response => console.log(response)));
  }

  setMultiple( userStories: UserStory[] ): Observable<UserStory[]>    {
    return  forkJoin( userStories.map(
        userStory => {
            return this.set( userStory.id, userStory);
        })).pipe(tap(data => console.log(data, "melo")));
  }

  getProjectUserStories(project_id): Observable<UserStory[]> {
    const params = new HttpParams().set('project', String(project_id));
    return this.apiService.get('/userstories', params)
    .pipe(map(data => data));
      }
    }
