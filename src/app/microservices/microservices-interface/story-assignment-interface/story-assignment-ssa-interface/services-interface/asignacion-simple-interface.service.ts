import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SimpleAssignmentInput, SimpleAssignmentOutput } from '../../../../../core/models';

import {
    asignacionSimpleInputToSimpleAssingmentInput,
    ssaAsignacionSimpleOutputToSimpleAssignmentOutput,
    simpleAssignmentInputToasignacionSimple
 } from '../../../../microservices-interface/story-assignment-interface/story-assignment-ssa-interface/models-interface';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { SSAAsignacionSimpleInput, SSAAsignacionSimpleOutput } from '../../../../story-assignment/story-assignment-ssa/models';
import { SSAAsignacionSimpleService } from '../../../../story-assignment/story-assignment-ssa/services';

@Injectable()
export class AsignacionSimpleInterfaceService {
  constructor (
    private ssaAasignacionSimpleService: SSAAsignacionSimpleService 
  ) {}

  generarAsignacionSimple(simpleAssignmentInput: SimpleAssignmentInput): Observable<SimpleAssignmentOutput> {
    var ssaAsignacionSimpleInput: SSAAsignacionSimpleInput = new SSAAsignacionSimpleInput();
    ssaAsignacionSimpleInput = simpleAssignmentInputToasignacionSimple(simpleAssignmentInput);
      return  this.ssaAasignacionSimpleService.generarAsignacionSimple(ssaAsignacionSimpleInput)
           .map( (ssaAsignacionSimpleOutput: SSAAsignacionSimpleOutput) => {
                    return ssaAsignacionSimpleOutputToSimpleAssignmentOutput(ssaAsignacionSimpleOutput);
            } );
}
}
