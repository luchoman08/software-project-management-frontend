import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { ApiService } from './api.service';
import { AssignmentInput } from '../models/assignment-input.model';
import { SimpleAssignmentOutput } from '../models/assignment-output.model';

@Injectable()
export class AssignmentService {
  constructor(private apiService: ApiService) {}

  generarAsignacionSimple(
    assignmentInput: AssignmentInput
  ): Observable<AssignmentInput> {
    return this.apiService
      .post('/uniquecostassign/', assignmentInput)
      .map((assignmentOptut: AssignmentInput) => {
        return assignmentOptut;
      });
  }
}
