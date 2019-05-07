import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { ApiService } from './api.service';
import { AssignmentInput } from '../models/assignment-input.model';
import { AssignmentByPunctuation } from '../models/assignment-by-punctuations.model';
import { AssignmentByPairs } from '../models/assignment-by-pairs.model';
import { DeveloperPair } from '../models/developer-pair.model';
import { Developer } from '../models/developer.model';

@Injectable()
export class AssignmentService {
  constructor(private apiService: ApiService) {}

  generateAssignmentByPunctuations(
    assignmentByPunctuations: AssignmentByPunctuation): Observable<AssignmentByPunctuation> {
      return this.apiService
      .post('/attributeassign/', assignmentByPunctuations)
      .pipe(map((_assignmentByPunctuations: AssignmentByPunctuation) => {
        return AssignmentByPunctuation.fromJSON(_assignmentByPunctuations);
      }));
    }

  generatePairs(
    pairsInput: {reverse: boolean, developers: Developer[]}
  ): Observable<DeveloperPair[]> {
    return this.apiService
    .post('/makepairs/', pairsInput)
    .pipe(map((pairs: DeveloperPair[]) => {
      return DeveloperPair.makeFromJsonArray(pairs);
    }));
  }

  generarAsignacionSimple(
    assignmentUniqueCost: AssignmentInput
  ): Observable<AssignmentInput> {
    return this.apiService
      .post('/uniquecostassign/', assignmentUniqueCost)
      .pipe(map((_assignmentUniqueCost: AssignmentInput) => {
        return AssignmentInput.fromJSON(_assignmentUniqueCost);
      }));
  }
  generateAssignmentByPairs(
    assignmentByPairs: AssignmentByPairs
  ): Observable<AssignmentByPairs> {
    return this.apiService
      .post('/pairassign/', assignmentByPairs)
      .pipe(map((_assignmentByPairs) => {
        return AssignmentByPairs.makeFromJson(_assignmentByPairs);
      }));
  }
}
