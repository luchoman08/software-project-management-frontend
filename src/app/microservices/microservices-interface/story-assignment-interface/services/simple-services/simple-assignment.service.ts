import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../../../../core/services';
import { SimpleAssignmentOutput, SimpleAssignmentInput } from '../../../../core/models';
import { TaigaUserStoriesSimpleInterfaceService } from '../../taiga-interface/service-interface';
import { ProjectManagersInterfaceService } from '../project-managers-interface.service';
import { map } from 'rxjs/operators/map';
import { ProjectManagersEnum } from '../../enums';

@Injectable()
export class SimpleUserStoriesService {

  constructor (
    private taigaUserStoriesServiceInterface: TaigaUserStoriesSimpleInterfaceService,
    private projectManagersInterfaceService: ProjectManagersInterfaceService
  ) {
  }

  get(slug): Observable<SimpleUserStory> {
    switch (this.projectManagersInterfaceService.chosenProjectManager) {
      case ProjectManagersEnum.TAIGA: {
        return this.taigaUserStoriesServiceInterface.get(slug);
      }
    }
  }
  getSimpleProjectStories(project_id): Observable<SimpleUserStory[]> {
    switch (this.projectManagersInterfaceService.chosenProjectManager) {
      case ProjectManagersEnum.TAIGA: {
        return this.taigaUserStoriesServiceInterface.getSimpleProjectStories(project_id);
      }
    }
  }

}
