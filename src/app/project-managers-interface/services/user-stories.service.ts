import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../core/services';
import { SimpleUserStory } from '../../core/models';
import { TaigaInterfaceUserStories } from '../taiga-interface/service-conversions';
import { ProjectManagersInterfaceService } from '../project-managers-interface.service';
import { map } from 'rxjs/operators/map';
import { EnumProjectManagers } from '../project-managers-enum';

@Injectable()
export class UserStoriesService {

  constructor (
    private taigaInterface: TaigaInterfaceUserStories,
    private projectManagersInterfaceService: ProjectManagersInterfaceService
  ) {
  }

  get(slug): Observable<SimpleUserStory> {
    switch (this.projectManagersInterfaceService.chosenProjectManager){
      case EnumProjectManagers.TAIGA: {
        return this.taigaInterface.get(slug);
      }
    }
  }
  getProjectStories(project_id): Observable<SimpleUserStory[]> {
    switch (this.projectManagersInterfaceService.chosenProjectManager) {
      case EnumProjectManagers.TAIGA: {
        return this.taigaInterface.getProjectStories(project_id);
      }
    }
  }

}
