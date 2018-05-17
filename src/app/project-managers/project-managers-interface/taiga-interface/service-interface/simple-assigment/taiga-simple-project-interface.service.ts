import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SimpleProject } from '../../../../../core/models';

import {
    taigaProjectToSimpleProject,
    taigaProjectsToSimpleProjects
 } from '../../model-interface/';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { TaigaProject } from '../../../../../project-managers/taiga/models';
import { TaigaProjectsService } from '../../../../taiga/services/taiga-projects.service';

@Injectable()
export class TaigaProjectsSimpleInterfaceService {
  constructor (
    private taigaProjectsService: TaigaProjectsService
  ) {}

  get(slug): Observable<SimpleProject> {
      return this.taigaProjectsService.get(slug)
          .map( (taigaProject: TaigaProject) => {
                    return taigaProjectToSimpleProject(taigaProject);
            } );
}
  /**
   * Get all projects where a given member is part of them
  */
  getSimpleProjectsByMemberId(member_id): Observable <SimpleProject[]> {
    return this.taigaProjectsService.getByMember(member_id)
    .map ((taigaProjects: TaigaProject[]) => {
      return taigaProjectsToSimpleProjects(taigaProjects);
    }
  );
  }

  getSimpleProjectBySlug(slug): Observable<SimpleProject> {
    return this.taigaProjectsService.getBySlug(slug)
    .map( (taigaProject: TaigaProject) => {
              return taigaProjectToSimpleProject(taigaProject);
      } );
  }

}
