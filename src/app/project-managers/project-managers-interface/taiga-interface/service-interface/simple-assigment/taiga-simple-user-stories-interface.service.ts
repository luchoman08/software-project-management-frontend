import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserStory } from '../../../../../core/models';

import {
    taigaStoryToSimpleUserStory,
    taigaStoriesToSimpleUserStories
 } from '../../model-interface';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { TaigaUserStoriesService } from '../../../../../project-managers/taiga/services/';
import { TaigaUserStory } from '../../../../../project-managers/taiga/models';

@Injectable()
export class TaigaUserStoriesSimpleInterfaceService {
  constructor (
    private taigaUserStoriesService: TaigaUserStoriesService
  ) {}

  get(slug): Observable<UserStory> {
      return this.taigaUserStoriesService.get(slug)
          .map( (taigaUserStory: TaigaUserStory) => {
                    return taigaStoryToSimpleUserStory(taigaUserStory);
            } );
}

  getSimpleProjectStories(project_id): Observable<UserStory[]> {
    return this.taigaUserStoriesService.getProjectStories(project_id)
    .map( (taigaUserStories: TaigaUserStory[]) => {
              return taigaStoriesToSimpleUserStories(taigaUserStories);
      } );
  }

}
