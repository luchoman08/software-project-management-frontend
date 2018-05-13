import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../core/services';
import { SimpleDeveloper } from '../../core/models';
import { TaigaMembershipsServiceInterface } from '../taiga-interface/service-interface';
import { ProjectManagersInterfaceService } from '../services/project-managers-interface.service';
import { map } from 'rxjs/operators/map';
import { ProjectManagersEnum } from '../enums';

@Injectable()
export class DevelopersService {

  constructor (
    private taigaMembershipsServiceInterface: TaigaMembershipsServiceInterface,
    private projectManagersInterfaceService: ProjectManagersInterfaceService
  ) {
  }

  get(slug): Observable<SimpleDeveloper> {
    switch (this.projectManagersInterfaceService.chosenProjectManager) {
      case ProjectManagersEnum.TAIGA: {
        return this.taigaMembershipsServiceInterface.get(slug);
      }
    }
  }
  getProjectStories(project_id): Observable<SimpleDeveloper[]> {
    switch (this.projectManagersInterfaceService.chosenProjectManager) {
      case ProjectManagersEnum.TAIGA: {
        return this.taigaMembershipsServiceInterface.getProjectMemberships(project_id);
      }
    }
  }

}
