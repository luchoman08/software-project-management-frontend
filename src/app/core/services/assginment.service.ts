import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { ApiService } from './api.service';
import { AssignmentInput } from '../models/assignment-input.model';
import { AssignmentByPunctuation } from '../models/assignment-by-punctuations.model';

@Injectable()
export class AssignmentService {
  constructor(private apiService: ApiService) {}

  generateAssignmentByPunctuations(
    assignmentByPunctuations: AssignmentByPunctuation): Observable<AssignmentByPunctuation> {
      return this.apiService
      .post('/attributeassign/', assignmentByPunctuations)
      .map((assignmentByPunctuations: AssignmentByPunctuation) => {
        return assignmentByPunctuations;
      })
    }
  )
  generarAsignacionSimple(
    assignmentUniqueCost: AssignmentInput
  ): Observable<AssignmentInput> {
    return this.apiService
      .post('/uniquecostassign/', assignmentUniqueCost)
      .map((assignmentUniqueCost: AssignmentInput) => {
        return assignmentUniqueCost;
      });
  }
}
