import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SimpleUserStory } from '../../../core/models';

import {
    taigaStoryToSimpleUserStory,
    taigaStoriesToSimpleUserStories
 } from '../model-interface';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { TaigaUserStoriesService } from '../../../project-managers/taiga/services/taiga-user-stories.service';
import { TaigaUserStory } from '../../../project-managers/taiga/models/taiga-user-story.model';

@Injectable()
export class TaigaUserStoriesInterfaceService {
  constructor (
    private taigaUserStoriesService: TaigaUserStoriesService
  ) {}

  get(slug): Observable<SimpleUserStory> {
      return this.taigaUserStoriesService.get(slug)
          .map( (taigaUserStory: TaigaUserStory) => {
                    console.log(taigaUserStory);
                    return taigaStoryToSimpleUserStory(taigaUserStory);
            } );
}

  getProjectStories(project_id): Observable<SimpleUserStory[]> {
    return this.taigaUserStoriesService.getProjectStories(project_id)
    .map( (taigaUserStories: TaigaUserStory[]) => {
              console.log(taigaUserStories);
              return taigaStoriesToSimpleUserStories(taigaUserStories);
      } );
  }

}
