import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../../../core/services';
import { SimpleSprint } from '../../../../core/models';
import { TaigaMilestonesSimpleServiceInterface } from '../../taiga-interface/service-interface';
import { ProjectManagersInterfaceService } from '../project-managers-interface.service';
import { map } from 'rxjs/operators/map';
import { ProjectManagersEnum } from '../../enums';

@Injectable()
export class SprintsService {

  constructor (
    private taigaMilestonesServiceInterface: TaigaMilestonesSimpleServiceInterface,
    private projectManagersInterfaceService: ProjectManagersInterfaceService
  ) {
  }

  get(slug): Observable<SimpleSprint> {
    switch (this.projectManagersInterfaceService.chosenProjectManager) {
      case ProjectManagersEnum.TAIGA: {
        return this.taigaMilestonesServiceInterface.get(slug);
      }
    }
  }
  getSimpleProjectSprints(project_id): Observable<SimpleSprint[]> {
    switch (this.projectManagersInterfaceService.chosenProjectManager) {
      case ProjectManagersEnum.TAIGA: {
        return this.taigaMilestonesServiceInterface.getSimpleProjectSprints(project_id);
      }
    }
  }

}
