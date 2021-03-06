import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable ,  forkJoin } from 'rxjs';
import { ApiService } from './api.service';
import { UserStory } from '../models';
import { map ,  tap } from 'rxjs/operators';
@Injectable()
export class UserStoriesService {

  constructor ( private apiService: ApiService) {  }

  get(slug, append_punctuations?: boolean): Observable<UserStory> {
    const params = append_punctuations ? new HttpParams().set('append_punctuations', '1') : new HttpParams();
    return this.apiService.get('/userstories/' + slug, params)
    .pipe(map(data => data));
  }
  set( slug: string | number, userStory: UserStory ): Observable<UserStory> {
    return this.apiService.patch('/userstories/' + String(slug), userStory ).pipe(tap(response => console.log(response)));
  }

  setMultiple( userStories: UserStory[] ): Observable<UserStory[]>    {
    return  forkJoin( userStories.map(
        userStory => {
            return this.set( userStory.id, userStory);
        }));
  }

  getProjectUserStories(project_id): Observable<UserStory[]> {
    const params = new HttpParams().set('project', String(project_id));
    return this.apiService.get('/userstories', params)
    .pipe(map(data => data));
      }
    }
