import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../../../../core/services';
import { SimpleAssignmentOutput, SimpleAssignmentInput } from '../../../../../core/models';
import { AsignacionSimpleInterfaceService } from '../../story-assignment-ssa-interface/services-interface';
import { AssignmentMiroservicesInterfaceService } from '../story-assignment-microservices-interface.services';
import { map } from 'rxjs/operators/map';
import { StoryAssignmentMiroservicesEnum } from '../../enums';

@Injectable()
export class SimpleUserStoriesService {

  constructor (
    private asignacionSimpleInterfaceService: AsignacionSimpleInterfaceService,
    private assignmentMicroservicesInterfae: AssignmentMiroservicesInterfaceService
  ) {
  }

  generateSimpleAssignment(simpleAssignmentInput: SimpleAssignmentInput): Observable<SimpleAssignmentOutput> {
    switch (this.assignmentMicroservicesInterfae.choosenAssignmentMicroservicee) {
      case StoryAssignmentMiroservicesEnum.SIMPLE_SISTEM_ASSIGNMENT: {
        return this.asignacionSimpleInterfaceService.generarAsignacionSimple(simpleAssignmentInput);
      }
    }
  }
}
