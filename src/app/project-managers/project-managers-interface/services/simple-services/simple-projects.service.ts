import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../../../core/services';
import { SimpleProject } from '../../../../core/models';
import { TaigaProjectsSimpleInterfaceService } from '../../taiga-interface/service-interface';
import { ProjectManagersInterfaceService } from '../project-managers-interface.service';
import { map } from 'rxjs/operators/map';
import { ProjectManagersEnum } from '../../enums';

@Injectable()
export class SimpleProjectsService {

  constructor (
    private taigaProjectsSimpleInterfaceService: TaigaProjectsSimpleInterfaceService,
    private projectManagersInterfaceService: ProjectManagersInterfaceService
  ) {
  }

  get(slug): Observable<SimpleProject> {
    switch (this.projectManagersInterfaceService.chosenProjectManager) {
      case ProjectManagersEnum.TAIGA: {
        return this.taigaProjectsSimpleInterfaceService.get(slug);
      }
    }
  }
  getSimpleProjectBySlug(slug): Observable<SimpleProject> {
    switch (this.projectManagersInterfaceService.chosenProjectManager) {
      case ProjectManagersEnum.TAIGA: {
        return this.taigaProjectsSimpleInterfaceService.getSimpleProjectBySlug(slug);
      }
    }
  }
  /**
   * Get all projects where a given member is part of them
  */
  getSimpleProjectsByMemberId(member_id): Observable<SimpleProject[]> {
    switch (this.projectManagersInterfaceService.chosenProjectManager) {
      case ProjectManagersEnum.TAIGA: {
        return this.taigaProjectsSimpleInterfaceService.getSimpleProjectsByMemberId(member_id);
      }
    }
  }

}