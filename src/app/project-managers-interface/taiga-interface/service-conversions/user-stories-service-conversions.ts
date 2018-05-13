import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SimpleUserStory } from '../../../core/models';

import {
    taigaStoryToSimpleUserStory,
    taigaStoriesToSimpleUserStories
 } from '../model-conversions';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { TaigaUserStoriesService } from '../../../project-managers/taiga/services/taiga-user-stories.service';
import { TaigaUserStory } from '../../../project-managers/taiga/models/taiga-user-story.model';

@Injectable()
export class TaigaInterfaceUserStories {
  constructor (
    private taigaUserStoriesService: TaigaUserStoriesService
  ) {}

  get(slug): Observable<SimpleUserStory> {
      let simpleUserStory$: Observable<SimpleUserStory>;
      this.taigaUserStoriesService.get(slug)
          .subscribe( taigaUserStory => {
                    console.log(taigaUserStory);
                    simpleUserStory$ = Observable.of(taigaStoryToSimpleUserStory(taigaUserStory));
            } );
    return simpleUserStory$;
}

  getProjectStories(project_id): Observable<SimpleUserStory[]> {
    return this.taigaUserStoriesService.getProjectStories(project_id)
    .map( taigaUserStories => {
              console.log(taigaUserStories);
              return taigaStoriesToSimpleUserStories(taigaUserStories);
      } );
  }

}
