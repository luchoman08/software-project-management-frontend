import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SimpleAssignmentInput, SimpleAssignmentOutput } from '../../../../../core/models';

import {
    asignacionSimpleInputToSimpleAssingmentInput,
    ssaAsignacionSimpleOutputToSimpleAssignmentOutput
 } from '../../models-interface';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { SSAAsignacionSimpleInput, SSAAsignacionSimpleOutput } from '../../../../simple-story-assignment-ssa/models/';

@Injectable()
export class AsignacionSimpleServiceInterface {
  constructor (
    private ssaAasignacionSimpleService: SSAAsignacionSimpleService
  ) {}

  generarAsignacionSimple(simplessignmentInput: SimpleAssignmentInput): Observable<SimpleAssignmentOutput> {
      return  this.ssaAasignacionSimpleService.generarAsignacionSimple(slug)
           .map( (taigaUserStory: TaigaUserStory) => {
                    return taigaStoryToSimpleUserStory(taigaUserStory);
            } );
}

  getSimpleProjectDevelopers(project_id): Observable<SimpleDeveloper[]> {
    return this.taigaMembershipsService.getProjectMembership(project_id)
    .map( (taigaMemberships: TaigaMembership[]) => {
              return taigaMembershipsToSimpleDevelopers(taigaMemberships);
      } );
  }

}
